const mysql = require('mysql2');

// connect to a database peoplebook running on your localmachine
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'peoplebook',
    password: 'MyNewPassword'
});


// let mysqlstatement = 'CREATE TABLE artists ('  
//     + 'id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,'
//     + 'name VARCHAR(255) NOT NULL,'
//     + 'about VARCHAR(255) NOT NULL,'
//     + 'imageurl VARCHAR(255) NOT NULL' 
//     +')'

//INSERT INTO artists (name, about, imageurl) VALUES ("value1", "value2", "value3");

//pool.execute(mysqlstatement);    


module.exports = pool.promise();
