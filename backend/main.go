package main

import (
	"fmt"
	"gorm_crud_example/models"
	"log"
	"net/http"

	"github.com/google/uuid"
	"github.com/lib/pq"
	"gopkg.in/go-playground/validator.v8"

	"github.com/gin-gonic/gin"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

type Good struct {
	ID          string `sql:"AUTO_INCREMENT" gorm:"primary_key"`
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

type App struct {
	db *gorm.DB
}

func (r *App) Save(good *Good) RepositoryResult {
	err := r.db.Save(good).Error

	if err != nil {
		return RepositoryResult{Error: err}
	}

	return RepositoryResult{Result: good}
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
	db, err := gorm.Open("postgres", "host=localhost port=5432 user=postgres dbname=mysubie sslmode=disable")

	if err != nil {
		log.Fatalln(err)
	}

	err = db.DB().Ping()

	if err != nil {
		log.Fatalln(err)
	}

	db.AutoMigrate(Good{})

	defer db.Close()

	var app = App{db}

	// r := gin.Default()
	// app.initializeRoutes(r)
	r := app.initializeRoutes()
	r.Run()

	return r, db
}

func (app *App) initializeRoutes() *gin.Engine {
	route := gin.Default()

	// create route /create endpoint
	route.POST("/create", func(context *gin.Context) {
		var good Good
		err := context.ShouldBindJSON(&good)

		if err != nil {
			response := GenerateValidationResponse(err)
			context.JSON(http.StatusBadRequest, response)
			return
		}

		code := http.StatusOK

		response := CreateGood(&good, *app)

		// save contact failed
		if !response.Success {
			// change http status code to 400
			code = http.StatusBadRequest
		}

		context.JSON(code, response)
	})

	// route.GET("/", func(context *gin.Context) {
	// 	code := http.StatusOK

	// 	response := services.FindAllContacts(*contactRepository)

	// 	if !response.Success {
	// 		code = http.StatusBadRequest
	// 	}

	// 	context.JSON(code, response)
	// })

	// route.GET("/show/:id", func(context *gin.Context) {
	// 	id := context.Param("id")

	// 	code := http.StatusOK

	// 	response := services.FindOneContactById(id, *contactRepository)

	// 	if !response.Success {
	// 		code = http.StatusBadRequest
	// 	}

	// 	context.JSON(code, response)
	// })

	// route.PUT("/update/:id", func(context *gin.Context) {
	// 	id := context.Param("id")

	// 	var contact models.Contact

	// 	err := context.ShouldBindJSON(&contact)

	// 	// validation errors
	// 	if err != nil {
	// 		response := helpers.GenerateValidationResponse(err)

	// 		context.JSON(http.StatusBadRequest, response)

	// 		return
	// 	}

	// 	code := http.StatusOK

	// 	response := services.UpdateContactById(id, &contact, *contactRepository)

	// 	if !response.Success {
	// 		code = http.StatusBadRequest
	// 	}

	// 	context.JSON(code, response)
	// })

	// route.DELETE("/delete/:id", func(context *gin.Context) {
	// 	id := context.Param("id")

	// 	code := http.StatusOK

	// 	response := services.DeleteOneContactById(id, *contactRepository)

	// 	if !response.Success {
	// 		code = http.StatusBadRequest
	// 	}

	// 	context.JSON(code, response)
	// })

	// route.POST("/delete", func(context *gin.Context) {
	// 	var multiID dtos.MultiID

	// 	err := context.ShouldBindJSON(&multiID)

	// 	// validation errors
	// 	if err != nil {
	// 		response := helpers.GenerateValidationResponse(err)

	// 		context.JSON(http.StatusBadRequest, response)

	// 		return
	// 	}

	// 	if len(multiID.Ids) == 0 {
	// 		response := dtos.Response{Success: false, Message: "IDs cannot be empty."}

	// 		context.JSON(http.StatusBadRequest, response)

	// 		return
	// 	}

	// 	code := http.StatusOK

	// 	response := services.DeleteContactByIds(&multiID, *contactRepository)

	// 	if !response.Success {
	// 		code = http.StatusBadRequest
	// 	}

	// 	context.JSON(code, response)
	// })

	// route.GET("/pagination", func(context *gin.Context) {
	// 	code := http.StatusOK

	// 	pagination := helpers.GeneratePaginationRequest(context)

	// 	response := services.Pagination(*contactRepository, context, pagination)

	// 	if !response.Success {
	// 		code = http.StatusBadRequest
	// 	}

	// 	context.JSON(code, response)
	// })

	return route
}

// func (app *App) initializeRoutes(r *gin.Engine) {
// 	r.GET("/ping", func(c *gin.Context) { c.JSON(200, gin.H{"message": "pong"}) })
// 	r.GET("/goods", app.returnGoods)
// 	r.NoRoute(func(c *gin.Context) {
// 		render(c, gin.H{"payload": "not found"})
// 	})

// }

// func (app *App) returnGoods(c *gin.Context) {
// 	goods := []*Good{}
// 	var models []string
// 	_ = json.Unmarshal([]byte(c.Query("models")), &models)
// 	app.db.Where("model IN (?)", models).Find(&goods)
// 	render(c, gin.H{"payload": goods})

// 	// app.db.Find(&goods)
// 	// models := c.Query("models")
// 	// render(c, gin.H{"payload": models})
// }

func render(c *gin.Context, data gin.H) {

	c.Header("Access-Control-Allow-Origin", "*")
	c.Header("Access-Control-Allow-Credentials", "true")
	c.Header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
	c.Header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")

	c.JSON(http.StatusOK, data["payload"])
}

func CreateGood(good *Good, app App) Response {
	uuidResult, err := uuid.NewRandom()

	if err != nil {
		log.Fatalln(err)
	}

	good.ID = uuidResult.String()

	operationResult := app.Save(good)

	if operationResult.Error != nil {
		return Response{Success: false, Message: operationResult.Error.Error()}
	}

	var data = operationResult.Result.(*models.Contact)

	return Response{Success: true, Data: data}
}

type Validation struct {
	Field   string `json:"field"`
	Message string `json:"message"`
}

type ValidationResponse struct {
	Success     bool         `json:"success"`
	Validations []Validation `json:"validations"`
}

type Response struct {
	Success bool        `json:"success"`
	Message string      `json:"message"`
	Data    interface{} `json:"data"`
}

type RepositoryResult struct {
	Result interface{}
	Error  error
}


func GenerateValidationResponse(err error) (response ValidationResponse) {
	response.Success = false

	var validations []Validation

	validationErrors := err.(validator.ValidationErrors)

	for _, value := range validationErrors {
		field, rule := value.Field, value.Tag

		validation := Validation{Field: field, Message: GenerateValidationMessage(field, rule)}

		validations = append(validations, validation)
	}

	response.Validations = validations

	return response
}

func GenerateValidationMessage(field string, rule string) (message string) {
	switch rule {
	case "required":
		return fmt.Sprintf("Field '%s' is '%s'.", field, rule)
	default:
		return fmt.Sprintf("Field '%s' is not valid.", field)
	}
}
