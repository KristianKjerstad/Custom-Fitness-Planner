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
	router.Use(setAPIHeadersMiddleware)
	router.HandleFunc("/", api.HomeHandler).Methods(http.MethodGet)
	router.HandleFunc("/workouts", api.WorkoutsHandler).Methods(http.MethodGet)
	router.HandleFunc("/health", api.HealthCheckHandler).Methods(http.MethodGet)
	router.Use(mux.CORSMethodMiddleware(router))

	// repositories.AddDataExample()
	// repositories.TestAddToDB()
	// fmt.Println("API is ready!")
	http.ListenAndServe(":8000", router)

}

// Middleware to set headers
func setAPIHeadersMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Set Content-Type header for all requests
		w.Header().Set("Content-Type", "application/json")
		w.Header().Set("Access-Control-Allow-Origin", "*")
		next.ServeHTTP(w, r) // Call the next handler
	})
}
