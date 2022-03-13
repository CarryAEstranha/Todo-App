const database = require("../database/db");
const Task = require("../models/todoTask");

const createTask = async (request, response) => {
    const { complete, task } = request.body;

    await database.sync();

    const newTask = await Task.create({
        complete: complete,
        description: task
    });

    return response.json({
        message: "Nova tarefa cadastrada"
    });
}

module.exports = createTask;