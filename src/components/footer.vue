<template>
	<keep-alive>
	<div class="footer_box">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
		  <el-menu-item @click="go('/index/')" index="1">首页</el-menu-item>
		  <el-menu-item @click="go('/chat/dialog')" index="2">消息</el-menu-item>
		  <el-menu-item @click="go('/mine')" index="3">我的</el-menu-item>
		</el-menu>
	</div>
	</keep-alive>

</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      go(path){
      	this.$router.push({
      		path: path || '/'
      	})
      }
    }
  }
</script>

<style scoped lang="less">
	@color:#E6E6E6;
	.footer_box{
		position: fixed;
		bottom: 0;
		width: 100%;
		text-align: center;
		border-top: 1px solid @color;
		ul{
			width: 100%;
			li{
				width: 33.33%;
			}
		}
	}
</style>