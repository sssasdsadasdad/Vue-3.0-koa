const query = require('./db');

module.exports = {
	//检测用户名是否唯一
	uniqueUserName:function(name) {
		return query(`SELECT count(*) FROM user WHERE name='${name}'`)
	},
	reg:function(n, p, c, u){
		let t = Date.now();
	
	    return query(`INSERT INTO user(name,password,create_time,update_time) VALUES('${n}','${p}','${t}','${t}')`);
	},
	login: function(name){
		return query(`SELECT password FROM user WHERE name='${name}'`);
	}
}
