const query = require('./db');

module.exports = {
	reg:function(n, p, c, u){
		let t = Date.now();
	    return query(`INSERT INTO user(name,password,create_time,update_time) VALUES('${n}','${p}','${t}','${t}')`);
	}
}
