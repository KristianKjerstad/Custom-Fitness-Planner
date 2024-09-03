package repositories

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type FitnessLevel string

type ResultOutcome string

type MuscleGroup string

type WorkoutSplit string

const (
	Beginner     FitnessLevel = "Beginner"
	Intermediate FitnessLevel = "Intermediate"
	Advanced     FitnessLevel = "Advanced"
)

const (
	LooseWeight            ResultOutcome = "Loose weight"
	GainStrength           ResultOutcome = "Gain strength"
	Hypertrophy            ResultOutcome = "Hypertrophy"
	StrengthAndHypertrophy ResultOutcome = "Strength and Hypertrophy"
)

const (
	Shoulders  MuscleGroup = "Shoulders"
	Triceps    MuscleGroup = "Triceps"
	Lats       MuscleGroup = "Lats"
	Biceps     MuscleGroup = "Biceps"
	Quads      MuscleGroup = "Quads"
	Chest      MuscleGroup = "Chest"
	Hamstrings MuscleGroup = "Hamstrings"
	Glutes     MuscleGroup = "Glutes"
	Back       MuscleGroup = "Back"
)

const (
	UpperLower WorkoutSplit = "Upper/Lower"
	FullBody   WorkoutSplit = "Full body"
)

type Exercise struct {
	Name               string        `bson:"name"`
	Link               string        `bson:"link,omitempty"`
	Sets               string        `bson:"sets"`
	Reps               string        `bson:"reps"`
	MuscleGroupsWorked []MuscleGroup `bson:"muscle_groups_worked"`
}

type Workout struct {
	Exercises []Exercise `bson:"exercises"`
}

type WorkoutWeek struct {
	Workouts []Workout `bson:"workouts"`
}

type WorkoutProgram struct {
	ID               primitive.ObjectID `bson:"_id,omitempty"` // MongoDB ID
	ProgramName      string             `bson:"program_name"`
	AuthorName       string             `bson:"author_name"`
	FitnessLevel     FitnessLevel       `bson:"fitness_level"`
	MainOutcome      ResultOutcome      `bson:"main_outcome"`
	DaysPerWeek      int                `bson:"days_per_week"`
	LengthPerWorkout string             `bson:"length_per_workout"`
	WorkoutSplitType WorkoutSplit       `bson:"workout_split_type"`
	LinkToInfo       string             `bson:"link_to_info,omitempty"`
	CreatedAt        time.Time          `bson:"created_at"`
	UpdatedAt        time.Time          `bson:"updated_at"`
	WorkoutWeeks     []WorkoutWeek      `bson:"workout_weeks"`
}
