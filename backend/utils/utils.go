package utils

import (
	"encoding/json"
	"net/http"
	"strconv"
)

func WriteAPIError(w http.ResponseWriter, statusCode int, customMessage string) {
	w.WriteHeader(statusCode)
	json.NewEncoder(w).Encode(map[string]string{"error": customMessage, "statusCode": strconv.Itoa(statusCode)})
}
