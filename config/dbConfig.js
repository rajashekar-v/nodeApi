
module.exports = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE,
    dialect:'mariadb',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}
