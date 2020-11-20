<template>
	<div>
		<div class="header"> <img src="@/assets/logo.svg" alt="" class="company-logo common-float-left" />
			<ul class="nav">
				<li :class="activeIndex==index?'nav-item active':'nav-item'" v-for="(item,index) in indexList" :key="item.tagIndex">{{item.name}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				indexList: [{
					'name': '首页',
					'tagIndex': 0
				}, {
					'name': '首页2',
					'tagIndex': 1
				}, {
					'name': '首页3',
					'tagIndex': 2
				}, {
					'name': '首页4',
					'tagIndex': 3
				}]
			}
		},
		name: 'Header',
		props: {
			activeIndex: [Number]
		},
		components: {},
		methods: {}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>