<template>
	<div>
		<div class="bottom">
			<el-input ></el-input>
			<el-button type="primary">发送</el-button>
		</div>
	</div>
</template>

<script>

	export default {
		  sockets: {
    //不能改,j建立连接自动调用connect
    connect: function() {
      //与socket.io连接后回调
      console.log("socket connected");
    }
	}
		 }
</script>

<style scoped lang="less">
.bottom{
	position: fixed;
	bottom: 0;
	width: 100%;
	.el-input{
		width: calc(100% - 70px);
	}
	button{
		float: right;
	}
}
</style>