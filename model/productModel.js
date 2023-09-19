module.exports = (sequelize, DataTypes) =>{

    const Product = sequelize.define("products",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.INTEGER,
        },
        description:{
            type:DataTypes.TEXT,
        },
        published:{
            type:DataTypes.BOOLEAN,
        }
    });

    return Product;

}