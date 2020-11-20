<template>
	<div class="container">
		<Header :activeIndex=0></Header>
		<div class="main"> </div>
	</div>
</template>
<script>
	import Header from '@/components/common/Header'
	export default {
		name: 'Index',
		components: {
			Header
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				activeIndex: '1'
			}
		},
		created() {
			this.$message('welcome to the league of Draven');
		}
	}
</script>
<style lang='less' scoped>

</style>