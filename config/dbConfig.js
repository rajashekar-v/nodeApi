
module.exports = {
    host:"localhost",
    user: "root",
    password:"",
    database:"nodeapi",
    dialect:"mariadb",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
}
