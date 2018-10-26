<template>
	<div>
	    <div style="margin-bottom: 20px;">
	    	<el-input placeholder="请输入账号" v-model="userName">
			    <template slot="prepend">账号</template>
		    </el-input>
	    </div>
	   <div style="margin-bottom: 20px;">
	   	    <el-input placeholder="请输入密码" v-model="password">
		       <template slot="prepend">密码</template>
	         </el-input>
	   </div>
	  <el-button @click="login">登录</el-button>
	  <el-button @click="register">注册</el-button>
	  
	</div>
</template>

<script>
	export default  {
		data(){
        	return {
        		visible: false ,
        		userName: '',
        		password: ''
        	}
		},
		methods: {
			register(){
				this.$router.push({path: '/register'});
			},
			login(){
				this.$router.push({
					path: '/index'
				})
			}
		}
	}
</script>
