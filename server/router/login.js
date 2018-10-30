const router = require('koa-router')();
const api = require('../model/api');
const sha1 = require('sha1');
//const queryString = require('queryString');
router.post('/reg', async(ctx, next) => {
	let {password, confirm, name} = ctx.request.body;
	if(!name){
		ctx.body = {code: 2001, msg: '没有用户名!'}
		return false;
	}
	if(!password){
		ctx.body = {code: 2001, msg: '没有密码!'}
		return false;
	}
	if(password != confirm){
		ctx.body = {code: 2001, msg: '两次密码不一致!'}
		return false;
	}
	
	await api.uniqueUserName(name).then(async r => {
		if(r[0]['count(*)'] == 0){
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
		} else {
			ctx.body = {
			  	code: 2001,
			  	msg:'用户名已被注册',
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
