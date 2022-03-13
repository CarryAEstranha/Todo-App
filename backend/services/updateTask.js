const database = require("../database/db");
const Task = require("../models/todoTask");

const updateTask = async (request, response) => {
    const { complete } = request.body;

    await database.sync();

    const task = await Task.findByPk(parseInt(request.params.id));

    task.complete = complete;
    await task.save();

    return response.json(task);
}

module.exports = updateTask;