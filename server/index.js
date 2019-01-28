const koa = require('koa');
//const app = new koa;
const parser = require('koa-bodyparser')();
const router = require('./router')
const cors = require('koa2-cors')
const message = require('./message')
const redis = require('./redis')
//let config = require('../server.config')
//const path = require('path')
const token = require('./middleware/token')
class Server {
	constructor(){
//		console.log(path.relative(config.root, __dirname))
		this.app = new koa;
		this.app.use(cors({
		    origin: function (ctx) {
		//      if (ctx.url === '/test') {
		//          return "*"; // 允许来自所有域名请求
		//      }
		        return 'http://localhost:8080';
		    },
		    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
		    maxAge: 5,
		    credentials: true,
		    allowMethods: ['GET', 'POST', 'DELETE'],
		    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
		}))
		this.app.use(parser);
//		this.app.use(token)

		this.init()
	}
	init (){
		//路由挂载
		router(this.app)
		//实例化消息类
		global.redis = redis
		new message()
		//挂载redis至全局变量
	}
	start(port = 3000) {
		this.app.listen(port, () => {
			console.log('Server run in 3000')
		})
	}
//	use(fn){
//		this.app.use(fn)
//	}
	
}






let app = new Server;

app.start();

