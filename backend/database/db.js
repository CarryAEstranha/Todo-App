const Sequelize = require("sequelize");
const sequelize = new Sequelize("sql10478709", "sql10478709", "v2HkF8yL7z", {
    dialect: "mysql",
    host: "sql10.freesqldatabase.com",
    port: 3306
});

module.exports = sequelize;