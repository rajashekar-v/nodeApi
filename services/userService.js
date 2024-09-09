const { User } = require('../models');

exports.authenticateUser = async (email,password) => {
    const conditions = {};
    if (email) conditions.email = email;
    if (password) conditions.password = password;

    return await User.findOne({
        where: conditions
    });
};

exports.getAllUsers = async () => {
    return await User.findAll();
};

exports.createUser = async (userData) => {
    return await User.create(userData);
};

