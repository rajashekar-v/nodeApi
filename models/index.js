const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const User = require('./user')(sequelize, Sequelize.DataTypes);
//const Product = require('./product')(sequelize, Sequelize.DataTypes);

module.exports = {
    sequelize,
    User,
    //Product,
};