const database = require("../database/db");
const Task = require("../models/todoTask");

const deleteTask = async (request, response) => {
    await database.sync();

    const task = await Task.findByPk(parseInt(request.params.id));

    await task.destroy();

    return response.json(task);
}

module.exports = deleteTask;