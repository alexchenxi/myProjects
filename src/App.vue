<template>
	<div id="app">
		<router-view/> </div>
</template>
<script>
	export default {
		name: 'App'
	}
</script>
<style lang='less'>
	/*全局样式*/
	
	@import 'style/index.less';
	@import 'style/_var.less';
	@import 'style/common.less';
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #333;
		padding: 20px;
	}
	
	body, ul {
		margin: 0;
		padding: 0;
	}
</style>