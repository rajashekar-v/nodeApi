const { Sequelize,DataTypes } = require('sequelize');

const UserSchema = Sequelize.define("users",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
    },
    profile_photo:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
    },
    email:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
    },
    password:{
        type:DataTypes.STRING,
        allowNull: true,
        defaultValue: ""
    },
    post_count:{
        type:DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
    },
    is_blocked:{
        type:DataTypes.ENUM,
        values: ['Y', 'N'],
        defaultValue: 'N',
    },
    is_admin:{
        type:DataTypes.ENUM,
        values: ['Y', 'N'],
        defaultValue: 'N',
    },
    role:{
        type:DataTypes.ENUM,
        values: ['admin', 'guest','editor'],
    },
    viewed_by:{
        type:DataTypes.INTEGER,
        references: {
            model: users,
            key: 'id',
            
        }
    },
    followers:{
        type:DataTypes.INTEGER,
        references: {
            model: users,
            key: 'id',
        }
    },
    following:{
        type:DataTypes.INTEGER,
        references: {
            model: users,
            key: 'id',
        }
    },
    active:{
        type:DataTypes.ENUM,
        values: ['Y', 'N'],
        defaultValue: 'Y',
    },
    post:{
        type:DataTypes.INTEGER,
        references: {
            model: posts,
            key: 'id',
        }
    }
});

sequelize.models.users;

module.exports = UserSchema;


