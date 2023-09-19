const dbConfig = require('../config/dbConfig');

const { Sequelize , DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.user,
    dbConfig.password,
    {
        host:dbConfig.host,
        dialect:dbConfig.dialect,
        operatorsAliases:false,
        logging: false,
        freezeTableName: true,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        },
    }
);

sequelize.authenticate()
.then(()=>{
    console.log('Connection has been established successfully.');
}).catch((error)=>{
    console.error('Unable to connect to the database: ', error); 
});