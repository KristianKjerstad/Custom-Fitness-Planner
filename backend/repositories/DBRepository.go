package repositories

import (
	"context"
	"fmt"
	"os"
	"time"

	_ "github.com/lib/pq"
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

func testdb() {

}
