const express = require("express")
const routes = express.Router()
 
const UserController = require("./controllers/UserController")

routes.get("/users", UserController.index)
routes.post("/users", UserController.store)
routes.get("/users/:id", UserController.show)
routes.put("/users/:id", UserController.update)
routes.delete("/users/:id", UserController.destroy)

const MovieController = require("./controllers/MovieController")

routes.get("/movies", MovieController.index)
routes.post("/movies", MovieController.store)
routes.get("/movies/:id", MovieController.show)
routes.put("/movies/:id", MovieController.update)
routes.delete("/movies/:id", MovieController.destroy)

module.exports = routes