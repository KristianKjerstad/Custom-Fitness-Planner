package repositories

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	_ "github.com/lib/pq"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func ConnectToMongo() (*mongo.Client, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	host := os.Getenv("MONGO_HOST")
	port := os.Getenv("MONGO_PORT")
	username := os.Getenv("MONGO_USERNAME")
	password := os.Getenv("MONGO_PASSWORD")
	url := "mongodb://" + username + ":" + password + "@" + host + ":" + port
	fmt.Println(url)
	client, err := mongo.Connect(ctx, options.Client().ApplyURI(url))
	if err != nil {
		fmt.Println()
		return nil, err
	}

	return client, nil
}

func TestAddToDB() {
	client, err := ConnectToMongo()
	if err != nil {
		log.Fatal("ERROR! Could not connect to MongoDB:", err)
	}

	// Select the database and collection
	database := client.Database("test")
	collection := database.Collection("nums")

	// 1. Create Documents
	doc1 := bson.D{{"name", "Alice"}, {"age", 25}}
	doc2 := bson.D{{"name", "Bob"}, {"age", 30}}
	_, err = CreateDocument(collection, doc1)
	if err != nil {
		log.Fatal("ERROR! Could not create document:", err)
	}
	_, err = CreateDocument(collection, doc2)
	if err != nil {
		log.Fatal("ERROR! Could not create document:", err)
	}
	fmt.Println("Documents inserted successfully")

	// 2. Read Documents
	filter := bson.D{{"age", bson.D{{"$gte", 25}}}}
	results, err := ReadDocuments(collection, filter)
	if err != nil {
		log.Fatal("ERROR! Could not read documents:", err)
	}
	fmt.Println("Documents found:", results)

	// 3. Update Documents
	update := bson.D{{"$set", bson.D{{"age", 29}}}}
	updateResult, err := UpdateDocument(collection, filter, update)
	if err != nil {
		log.Fatal("ERROR! Could not update documents:", err)
	}
	fmt.Printf("Documents matched: %d, Documents updated: %d\n", updateResult.MatchedCount, updateResult.ModifiedCount)

	// 4. Delete Documents
	deleteResult, err := DeleteDocument(collection, filter)
	if err != nil {
		log.Fatal("ERROR! Could not delete documents:", err)
	}
	fmt.Printf("Documents deleted: %d\n", deleteResult.DeletedCount)

	// Close the connection when done
	if err = client.Disconnect(context.Background()); err != nil {
		log.Fatal("ERROR! Could not disconnect MongoDB client:", err)
	}
}

func CreateDocument(collection *mongo.Collection, document interface{}) (*mongo.InsertOneResult, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	res, err := collection.InsertOne(ctx, document)
	return res, err
}

func ReadDocuments(collection *mongo.Collection, programNames []string, fitnessLevels []string, mainOutcomes []string, workoutSplits []string, daysPerWeek []int) ([]bson.M, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	filter := bson.D{}
	// Add filters only if values are provided
	if len(programNames) > 0 {
		filter = append(filter, bson.E{Key: "program_name", Value: bson.D{{Key: "$in", Value: programNames}}})
	}
	if len(fitnessLevels) > 0 {
		filter = append(filter, bson.E{Key: "fitness_level", Value: bson.D{{Key: "$in", Value: fitnessLevels}}})
	}
	if len(mainOutcomes) > 0 {
		filter = append(filter, bson.E{Key: "main_outcome", Value: bson.D{{Key: "$in", Value: mainOutcomes}}})
	}
	if len(workoutSplits) > 0 {
		filter = append(filter, bson.E{Key: "workout_split_type", Value: bson.D{{Key: "$in", Value: workoutSplits}}})
	}
	if len(daysPerWeek) > 0 {
		filter = append(filter, bson.E{Key: "days_per_week", Value: bson.D{{Key: "$in", Value: daysPerWeek}}})
	}

	fmt.Println(filter)

	cursor, err := collection.Find(ctx, filter, options.Find())
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)
	var results []bson.M
	if err := cursor.All(ctx, &results); err != nil {
		return nil, err
	}
	return results, nil

}

func UpdateDocument(collection *mongo.Collection, filter interface{}, update interface{}) (*mongo.UpdateResult, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	res, err := collection.UpdateMany(ctx, filter, update)
	return res, err
}

func DeleteDocument(collection *mongo.Collection, filter interface{}) (*mongo.DeleteResult, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	res, err := collection.DeleteMany(ctx, filter)
	return res, err
}

func getGZCLPProgram() WorkoutProgram {
	day1 := Workout{
		Exercises: []Exercise{
			{
				Name:               "Squat",
				Sets:               "3",
				Reps:               "5+",
				MuscleGroupsWorked: []MuscleGroup{Quads, Glutes},
			},
			{
				Name:               "Bench Press",
				Sets:               "3",
				Reps:               "10",
				MuscleGroupsWorked: []MuscleGroup{Chest, Triceps},
			},
			{
				Name:               "Lat Pull Down",
				Sets:               "3",
				Reps:               "15+",
				MuscleGroupsWorked: []MuscleGroup{Lats, Biceps},
			},
		},
	}

	day2 := Workout{
		Exercises: []Exercise{
			{
				Name:               "Overhead Press",
				Sets:               "3",
				Reps:               "5+",
				MuscleGroupsWorked: []MuscleGroup{Shoulders, Triceps},
			},
			{
				Name:               "Deadlift",
				Sets:               "3",
				Reps:               "10",
				MuscleGroupsWorked: []MuscleGroup{Back, Hamstrings},
			},
			{
				Name:               "Dumbbell Row",
				Sets:               "3",
				Reps:               "15+",
				MuscleGroupsWorked: []MuscleGroup{Lats, Biceps},
			},
		},
	}

	day3 := Workout{
		Exercises: []Exercise{
			{
				Name:               "Deadlift",
				Sets:               "3",
				Reps:               "5",
				MuscleGroupsWorked: []MuscleGroup{Hamstrings, Back},
			},
			{
				Name:               "Deadlift",
				Sets:               "3",
				Reps:               "10",
				MuscleGroupsWorked: []MuscleGroup{Back, Hamstrings},
			},
			{
				Name:               "Dumbbell Row",
				Sets:               "3",
				Reps:               "15+",
				MuscleGroupsWorked: []MuscleGroup{Lats, Biceps},
			},
		},
	}

	program := WorkoutProgram{
		ID:               primitive.NewObjectID(),
		ProgramName:      "GZCLP for Novice Lifters",
		AuthorName:       "Cody Lefever",
		FitnessLevel:     Beginner,
		MainOutcome:      StrengthAndHypertrophy,
		DaysPerWeek:      3,
		LengthPerWorkout: "1 hour",
		WorkoutSplitType: FullBody,
		CreatedAt:        time.Now(),
		UpdatedAt:        time.Now(),
		WorkoutWeeks: []WorkoutWeek{
			{
				Workouts: []Workout{
					day1,
					day2,
					day3,
				},
			},
		},
	}
	return program
}

func getPHULProgram() WorkoutProgram {
	// Define exercises for each workout
	upperPowerExercises := []Exercise{
		{"Barbell Bench Press", "", "3-4", "3-5", nil},
		{"Incline Dumbbell Bench Press", "", "3-4", "6-10", nil},
		{"Bent Over Row", "", "3-4", "3-5", nil},
		{"Lat Pull Down", "", "3-4", "6-10", nil},
		{"Overhead Press", "", "2-3", "5-8", nil},
		{"Barbell Curl", "", "2-3", "6-10", nil},
		{"Skullcrusher", "", "2-3", "6-10", nil},
	}

	lowerPowerExercises := []Exercise{
		{"Squat", "", "3-4", "3-5", nil},
		{"Deadlift", "", "3-4", "3-5", nil},
		{"Leg Press", "", "3-5", "10-15", nil},
		{"Leg Curl", "", "3-4", "6-10", nil},
		{"Calf Exercise", "", "4", "6-10", nil},
	}

	upperHypertrophyExercises := []Exercise{
		{"Incline Barbell Bench Press", "", "3-4", "8-12", nil},
		{"Flat Bench Dumbbell Flye", "", "3-4", "8-12", nil},
		{"Seated Cable Row", "", "3-4", "8-12", nil},
		{"One Arm Dumbbell Row", "", "3-4", "8-12", nil},
		{"Dumbbell Lateral Raise", "", "3-4", "8-12", nil},
		{"Seated Incline Dumbbell Curl", "", "3-4", "8-12", nil},
		{"Cable Tricep Extension", "", "3-4", "8-12", nil},
	}

	lowerHypertrophyExercises := []Exercise{
		{"Front Squat", "", "3-4", "8-12", nil},
		{"Barbell Lunge", "", "3-4", "8-12", nil},
		{"Leg Extension", "", "3-4", "10-15", nil},
		{"Leg Curl", "", "3-4", "10-15", nil},
		{"Seated Calf Raise", "", "3-4", "8-12", nil},
		{"Calf Press", "", "3-4", "8-12", nil},
	}

	// Define the workouts and weeks
	phulProgram := WorkoutProgram{
		ID:               primitive.NewObjectID(),
		ProgramName:      "PHUL Program",
		AuthorName:       "Brandon Campbell",
		FitnessLevel:     Beginner,
		MainOutcome:      StrengthAndHypertrophy,
		DaysPerWeek:      4,
		LengthPerWorkout: "50 - 70 minutes",
		WorkoutSplitType: UpperLower,
		CreatedAt:        time.Now(),
		UpdatedAt:        time.Now(),
		WorkoutWeeks: []WorkoutWeek{
			{
				Workouts: []Workout{
					{Exercises: upperPowerExercises},
					{Exercises: lowerPowerExercises},
					{}, // Off Day
					{Exercises: upperHypertrophyExercises},
					{Exercises: lowerHypertrophyExercises},
					{}, // Off Day
					{}, // Off Day
				},
			},
		},
	}
	return phulProgram
}

func AddDataExample() {

	// Add the program to MongoDB using your AddWorkoutProgram function
	client, err := ConnectToMongo()
	if err != nil {
		fmt.Println("Failed to connect to MongoDB:", err)
		return
	}
	program1 := getGZCLPProgram()
	program2 := getPHULProgram()
	err = AddWorkoutProgram(client, program1)
	if err != nil {
		fmt.Println("Failed to add workout program:", err)
	} else {
		fmt.Println("Workout program added successfully!")
	}
	err = AddWorkoutProgram(client, program2)
	if err != nil {
		fmt.Println("Failed to add workout program:", err)
	} else {
		fmt.Println("Workout program added successfully!")
	}
}

func AddWorkoutProgram(client *mongo.Client, program WorkoutProgram) error {
	collection := client.Database("MainDB").Collection("programs")
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	_, err := collection.InsertOne(ctx, program)
	if err != nil {
		return err
	}

	return nil
}
