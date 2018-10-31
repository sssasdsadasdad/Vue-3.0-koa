<template>
	<div class="login">
	    <div style="margin-bottom: 20px;">
	    	<el-input placeholder="请输入账号" v-model="userInfo.name">
			    <template slot="prepend">账号</template>
		    </el-input>
	    </div>
	   <div style="margin-bottom: 20px;">
	   	    <el-input type="password" placeholder="请输入密码" v-model="userInfo.password">
		       <template slot="prepend">密码</template>
	         </el-input>
	   </div>
	   <div class="btn">
	   		<el-button @click="confirm">登录</el-button>
	   		<el-button @click="register">注册</el-button>
	   </div>
	  
	</div>
</template>

<script>
	import {login} from '@/api/login.js'
	export default  {
		data(){
        	return {
        		userInfo: {
        			name: '',
        			password: ''
        		}
        	}
		},
		methods: {
			register(){
				this.$router.push({path: '/login/register'});
			},
			confirm(){
				if(!this.userInfo.name || !this.userInfo.password){
					this.$message({
			            showClose: true,
			            message:  '缺少必填项',
			            type: 'error'
			        });
			        return
				}
				login(this.userInfo).then(res => {
					this.$message({
			            showClose: true,
			            message:  '登录成功',
			            type: 'success'
			        });
					setTimeout(()=>{
						this.$router.push({
							path: '/index'
						})
					}, 1500)
				}).catch(e => {
					this.$message({
			            showClose: true,
			            message:  e.msg || '登录失败,系统错误请联系管理员',
			            type: 'error'
			        });
				})
			}
		}
	}
</script>
<style scoped lang="less">
	@import '../assets/less/login.less';
</style>