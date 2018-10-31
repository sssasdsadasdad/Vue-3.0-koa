const koa = require('koa');
const app = new koa;
const parser = require('koa-bodyparser')();
const router = require('./router')
//const io = require('socket.io')
//var socket = io.listen(app)
//socket.on('connection', res => {
//	console.log(res)
//})
var io = require('socket.io').listen(app,{origins:'*'});
//io.set('transports', ['websocket', 'xhr-polling', 'jsonp-polling', 'htmlfile', 'flashsocket']);
//io.set('origins', '*:*');
io.sockets.on('connection', (socket) => {
    console.log('链接成功');
    socket.on('compile', () => {
    socket.emit('login', 'ok');
    });   
});

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
