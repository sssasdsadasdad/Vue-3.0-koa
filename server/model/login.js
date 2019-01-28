const sql = require('node-transform-mysql');
const mysql = require('./db')
exports.reg = (name, password, create_time) => {
	let s = sql.table('user').data({
		name,
		password,
		create_time
	}).insert();
	return mysql.query(s)
}

exports.uniqueName = name => {
	let s = sql.count().table('user').where({name}).select();
	return mysql.query(s)
}

exports.login = (name) => {
	let s = sql.table('user').where({name}).field('password').find();
	return mysql.query(s)
}
