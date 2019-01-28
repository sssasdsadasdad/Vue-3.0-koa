const r = require('redis')
class Redis{
	constructor(){
		this.redis = r.createClient({"host": "127.0.0.1", "port": "6379" });
	}
	get(key, fn){
		this.redis.get(key, (err, v) => {
			fn(err, v)
		})
	}
	set(k, v){
		this.redis.set(k, v)
	}
	del(k){
		this.redis.del(k)
	}

}

module.exports = new Redis()
