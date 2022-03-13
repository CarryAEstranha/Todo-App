const express = require("express");
const bp = require("body-parser");
const cors = require("cors");

const createTask = require("./services/createTask");
const requestAllTasks = require("./services/requestAllTasks");
const updateTask = require("./services/updateTask");
const deleteTask = require("./services/deleteTask");
const deleteMultiplesTasks = require("./services/deleteMultiplesTasks");

const app = express();

app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    response.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    response.setHeader("Access-Control-Allow-Credentials", true);

    next();
});

app.use(cors());
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.get("/task", requestAllTasks);

app.post("/task", createTask);

app.put("/task/:id", updateTask);

app.delete("/task/:id", deleteTask);

app.delete("/task/multiples/:ids", deleteMultiplesTasks);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server online");
});