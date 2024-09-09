package useCases

import (
	"encoding/json"

	"github.com/KristianKjerstad/AI-Workout-Planner/repositories"
)

func GetWorkoutsUseCase(programNames []string, fitnessLevels []string, mainOutcomes []string, workoutSplits []string, daysPerWeek []int) ([]byte, error) {
	client, err := repositories.ConnectToMongo()
	if err != nil {
		return []byte{}, err
	}
	collection := client.Database("MainDB").Collection("programs")
	result, err := repositories.ReadDocuments(collection, programNames, fitnessLevels, mainOutcomes, workoutSplits, daysPerWeek)

	if err != nil {
		return []byte{}, err
	}

	jsonData, err := json.Marshal(result)
	if err != nil {
		return []byte{}, err
	}

	return jsonData, nil

}
