const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('companies', 'root', '1234', {
    host: 'localhost',
    dialect: 'mssql',
});

(async function () {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
})();