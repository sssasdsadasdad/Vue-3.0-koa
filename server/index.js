const koa = require('koa');
const app = new koa;
const parser = require('koa-bodyparser')();
const router = require('./router')
const cors = require('koa2-cors')
//websocket，消息 类， 
const message = require('./message')
//const io = require('socket.io')
//var socket = io.listen(app)
//socket.on('connection', res => {
//	console.log(res)
//})
app.use(cors({
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

//
//const io = require('socket.io')();
//io.on('connection', client => {
//	map[client.id] = 22
//	client.on('event', (v) => {
//		
//		client.emit('login', map)
//	})
//});
//io.on('disconnect', client => {
//	console.log(client)
//	delete map[client.id];
//	console.log(map)
//});
//io.listen(3001);

new message()

app.use(parser);
router(app)

app.listen(3000);
console.log('Server run in 3000');
//class Server {
//	constructor(){
//		this.app = new koa();
//		this.app.use(cors({
//		    origin: function (ctx) {
//		        return "*"; // 允许来自所有域名请求
//		    },
//		    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//		    maxAge: 5,
//		    credentials: true,
//		    allowMethods: ['GET', 'POST', 'DELETE'],
//		    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
//		}));
//		this.app.use(parser);
//		this.app.use(router.routes());
//	}
//	strat(){
//		this.app.listen(8081)
//		console.log('Server run in 8081');
//	}
//}

//let app = new Server;

//app.strat();
