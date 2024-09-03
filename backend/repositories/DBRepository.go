package repositories

import (
	"context"
	"fmt"
	"log"
	"os"
	"time"

	_ "github.com/lib/pq"
	"go.mongodb.org/mongo-driver/bson"
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

func ReadDocuments(collection *mongo.Collection, filter interface{}) ([]bson.M, error) {
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	cursor, err := collection.Find(ctx, filter)
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
