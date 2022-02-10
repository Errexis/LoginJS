const Sequelize = require('sequelize')


const conn = new Sequelize("login", "root", "",{
    host: 'localhost',
    dialect: 'mariadb'
});


conn.authenticate()
.then(function(){
    console.log("Conexão com o banco de dados realizada com sucesso.");
}).catch(function(){
    console.log("Erro: Conexão com o banco de dados falhou.");
})

module.exports = Sequelize;
