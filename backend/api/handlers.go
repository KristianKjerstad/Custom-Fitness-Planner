package api

import (
	"fmt"
	"io"
	"net/http"
	"strings"

	"github.com/KristianKjerstad/AI-Workout-Planner/useCases"
	"github.com/KristianKjerstad/AI-Workout-Planner/utils"
)

func HomeHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodOptions {
		return
	}

	w.Write([]byte("foo"))
}

// Get all workouts
func WorkoutsHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method == http.MethodOptions {
		return
	}

	programNames := r.URL.Query()["programNames"]
	fitnessLevels := r.URL.Query()["fitnessLevels"]
	mainOutcomes := r.URL.Query()["mainOutcomes"]
	workoutSplits := r.URL.Query()["workoutSplits"]
	daysPerWeekStr := r.URL.Query().Get("daysPerWeek")
	var daysPerWeek []int
	if daysPerWeekStr != "" {
		for _, dayStr := range strings.Split(daysPerWeekStr, ",") {
			var day int
			fmt.Sscanf(dayStr, "%d", &day)
			daysPerWeek = append(daysPerWeek, day)
		}
	}

	workouts, err := useCases.GetWorkoutsUseCase(programNames, fitnessLevels, mainOutcomes, workoutSplits, daysPerWeek)
	if err != nil {
		utils.WriteAPIError(w, http.StatusInternalServerError, "Could not get workouts")
		return
	}

	w.Write(workouts)
}

func HealthCheckHandler(w http.ResponseWriter, r *http.Request) {
	// A very simple health check.
	w.WriteHeader(http.StatusOK)

	// In the future we could report back on the status of our DB, or our cache
	// (e.g. Redis) by performing a simple PING, and include them in the response.
	io.WriteString(w, `{"Status": "OK}`)
}
