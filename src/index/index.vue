<template>
	<div>
        <router-view></router-view>
		<footers></footers>
	</div>
</template>

<script>
	import footers from '@/components/footer.vue';
	
	export default {
		name: 'index',

		components: {
			footers,
		},
	}
</script>

<style scoped="scoped" lang="less">

</style>