package main

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/lib/pq"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type App struct {
	db *gorm.DB
}

type Good struct {
	Id          int `sql:"AUTO_INCREMENT" gorm:"primary_key"`
	Title       string
	Model       string
	Gen         string
	Tags        pq.StringArray `gorm:"type:text[]"`
	Weight      float64
	Price       float64
	Oldprice    float64 `sql:"null"`
	Stock       bool
	Description string
}

func (i *Good) TableName() string {
	return "goods"
}

func main() {

	router, db := initializeAPI()
	defer db.Close()

	log.Fatal(http.ListenAndServe(":8080", router))
}

func initializeAPI() (*gin.Engine, *gorm.DB) {
	db, err := gorm.Open("postgres", "host=localhost port=5432 user=postgres dbname=go_graphql_db sslmode=disable")

	if err != nil {
		log.Fatal(err)
	}

	var app = App{db}

	r := gin.Default()
	app.initializeRoutes(r)

	r.Run()

	return r, db
}

func (app *App) initializeRoutes(r *gin.Engine) {
	r.GET("/ping", func(c *gin.Context) { c.JSON(200, gin.H{"message": "pong"}) })
	r.GET("/goods", app.returnGoods)
	r.NoRoute(func(c *gin.Context) {
		render(c, gin.H{"payload": "not found"})
	})

}

func (app *App) returnGoods(c *gin.Context) {
	goods := []*Good{}
	var models []string
	_ = json.Unmarshal([]byte(c.Query("models")), &models)
	app.db.Where("model IN (?)", models).Find(&goods)
	render(c, gin.H{"payload": goods})

	// app.db.Find(&goods)
	// models := c.Query("models")
	// render(c, gin.H{"payload": models})
}

func render(c *gin.Context, data gin.H) {

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Credentials", "true")
	c.Header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
	c.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

	c.JSON(http.StatusOK, data["payload"])
}
