package main

import (
	"fmt"
	"net/http"

	"github.com/KristianKjerstad/AI-Workout-Planner/api"
	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("Starting API...")

	router := mux.NewRouter()
	router.HandleFunc("/", api.HomeHandler).Methods(http.MethodGet)
	router.HandleFunc("/health", api.HealthCheckHandler).Methods(http.MethodGet)
	router.Use(mux.CORSMethodMiddleware(router))

	// repositories.AddDataExample()
	// repositories.TestAddToDB()
	// fmt.Println("API is ready!")
	// http.ListenAndServe(":8000", router)

}
