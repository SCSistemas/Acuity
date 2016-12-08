function ConnectDatabase (){
    var mysql = require('mysql');

    this.connection = mysql.createConnection({
        host : '172.31.31.143',
        user : 'acuity',
        password : 'acuity1979',
        database: 'acuityads'
    });
};
module.exports = ConnectDatabase;