const router = require('koa-router')();
const api = require('../model/api');
const sha1 = require('sha1');
router.post('/reg', async(ctx, next) => {
	let {password, confirm, name} = ctx.request.body;
	
	if(password != confirm){
		ctx.body = {code: 0, msg: '密码与确认密码不相同!'}
		return false;
	}
	if(!name){
		ctx.body = {code: 0, msg: '没有用户名!'}
		return false;
	}
	
	await api.reg(name, sha1(password)).then(res => {
		if(res){
			ctx.body = {
			  	code: 2000,
			  	msg:'注册成功',
			}
		} else {
			ctx.body = {
			  	code: 2001,
			  	msg:'注册失败',
			}
		}
	})
	}).post('/login', (ctx, next) => {
		var name = ctx.request.body;
		ctx.body = {
		  	code: 2000,
		  	msg:'登录成功'
		}
	})

module.exports = router;
