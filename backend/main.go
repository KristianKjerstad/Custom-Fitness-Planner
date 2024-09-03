package main

import (
	"context"
	"fmt"
	"net/http"
	"time"

	"github.com/KristianKjerstad/AI-Workout-Planner/api"
	"github.com/KristianKjerstad/AI-Workout-Planner/repositories"
	"github.com/gorilla/mux"
	"go.mongodb.org/mongo-driver/bson"
)

func main() {
	fmt.Println("Starting API...")
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	router := mux.NewRouter()
	router.HandleFunc("/", api.HomeHandler).Methods(http.MethodGet)
	router.HandleFunc("/health", api.HealthCheckHandler).Methods(http.MethodGet)
	router.Use(mux.CORSMethodMiddleware(router))

	client, err := repositories.ConnectToMongo()
	if err != nil {
		fmt.Println("ERROR! Could not connect to db")
		fmt.Println(err)
		return

	}
	database := client.Database("test")
	collection := database.Collection("nums")
	documents := []interface{}{
		bson.D{{"name", "Alice"}, {"age", 25}},
		bson.D{{"name", "Bob"}, {"age", 30}},
		bson.D{{"name", "Charlie"}, {"age", 35}},
	}
	res, err := collection.InsertMany(ctx, documents)
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("Inserted document with _id: %v\n", res.InsertedIDs)
	fmt.Println("API is ready!")
	http.ListenAndServe(":8000", router)

}
