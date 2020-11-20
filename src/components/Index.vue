<template>
	<div class="container">
		<div class="header"> <img src="../assets/logo.svg" alt="" class="company-logo common-float-left" />
			<ul class="nav">
				<li class="nav-item active">首页</li>
				<li class="nav-item">首页</li>
				<li class="nav-item">首页</li>
				<li class="nav-item">首页</li>
			</ul>
		</div>
		<div class="main"> </div>
	</div>
</template>
<script>
	export default {
		name: 'Index',
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