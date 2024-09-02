package repositories

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "development"
	dbname   = "dev_db"
)

func ConnectToDB() (sql.DB, error) {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		return sql.DB{}, err
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		return sql.DB{}, err
	}
	fmt.Println("Successfully connected to DB!")
	return sql.DB{}, nil

}

func SaveWorkoutPlans(workoutPlans []) {

}
