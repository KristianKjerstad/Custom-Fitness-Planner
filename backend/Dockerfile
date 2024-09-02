# Dockerfile
FROM golang:1.22.4-alpine

WORKDIR /app
RUN go install github.com/air-verse/air@latest
# Copy the Go module files
COPY go.mod go.sum ./
RUN go mod download

# Copy the entire source code into the container
COPY . .

EXPOSE 8000

CMD ["air", "-c", ".air.toml"]
