<template>
	<div class="login">
	   <div style="margin-bottom: 20px;">
	    	<el-input placeholder="请输入账号" v-model="name">
			    <template slot="prepend">账&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号</template>
		    </el-input>
	    </div>
	   <div style="margin-bottom: 20px;">
	   	    <el-input type="password" placeholder="请输入密码" v-model="password">
		       <template slot="prepend">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码</template>
	         </el-input>
	   </div>
	     <div style="margin-bottom: 20px;">
	   	    <el-input type="password" placeholder="请确认密码" v-model="confirm">
		       <template slot="prepend">确认密码</template>
	         </el-input>
	   </div>
	   
	   <div class="btn">
		   	<el-button @click="register">确定注册</el-button>
		   	<el-button @click="login">返回登录</el-button>
	   </div>
	   <img class="bgImg" :src="bgimg"/>
		</div>
</template>

<script>
	import {reg} from '@/api/login.js'
	import axios from 'axios'
	export default {
		data(){
			return {
				name: '',
				password: '',
				confirm: '',
				bgimg: ''
			}
		},
		created(){

    
			//爬取图片做背景图
			let bgImg = 'http://www.weiqibao31415926.com/public/upload/goods/20181223/68bbec06096ae65b4327ebbe849bf79a.jpg'
			axios.post('/hostImg', {url: bgImg}).then(res => {
				this.bgimg = res.data
			})
		},
		methods: {
			register(){
				if(!this.name || !this.password || !this.confirm){
					this.$message({
			            showClose: true,
			            message:  '缺少必填项',
			            type: 'error'
			        });
			        return false;
				}
				if(this.password != this.confirm){
					this.$message({
			            showClose: true,
			            message:  '两次密码不一致',
			            type: 'error'
			        });
			        return false;
				}
				reg(this.name,this.password, this.confirm).then(res => {
					console.log(res)
						this.$message({
				            showClose: true,
				            message: '恭喜你，注册成功',
				            type: 'success'
				        });
				        setTimeout(() => {
				        	this.$router.push({
								path: '/'
							})
				        }, 1500)	
					
					
				
				}).catch(e => {
				    this.$message({
			            showClose: true,
			            message: e.msg || '注册失败',
			            type: 'error'
			        });
					
				})
			
			},
			login(){
	
				this.$router.push({
					path: '/'
				})
			}
		}
	}
</script>

<style scoped lang="less">
	@import '../assets/less/login.less';

</style>