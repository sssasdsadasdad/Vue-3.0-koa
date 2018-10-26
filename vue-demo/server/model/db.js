const mysql = require('mysql');

const POOL = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '123456',
	database : 'test'
});

module.exports = function (sql, v){
	return new Promise((resolve, reject) => {
		POOL.getConnection((err, connection) => {
			if(err){
				resolve(err)
			} else {
				resolve(connection.query(sql, v))
			}
		})
	})
}
