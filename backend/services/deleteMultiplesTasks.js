const database = require("../database/db");
const Task = require("../models/todoTask");

const deleteMultiplesTasks = async (request, response) => {
    const ids = JSON.parse(request.params.ids);

    console.log(ids);

    await database.sync();

    const tasks = await Task.destroy({
        where: { id: ids }
    });

    return response.json(tasks);
}

module.exports = deleteMultiplesTasks;