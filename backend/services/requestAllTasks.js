const database = require("../database/db");
const Task = require("../models/todoTask");

const requestAllTasks = async (request, response) => {
    await database.sync();

    const tasks = await Task.findAll();

    return response.json(tasks);
}

module.exports = requestAllTasks;