// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-1cb551d60b9b252a4f8642697d5359080d49f8cc.ceefo25bexkd.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: 'VrFK})zZ*]PL~$V+]E]]i8Ai1!XD9>oX'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            name: process.env.DB_NAME,
            dialect: process.env.DB_DIALECT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD
        }
    }
}