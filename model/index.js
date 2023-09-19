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

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.products = require("./productModel")(sequelize, DataTypes);
db.reviews = require("./reviewModel")(sequelize, DataTypes);

db.sequelize.sync({
    force:false
}).then(()=>{
    console.log('yes re-sync done');
});

module.exports = db;