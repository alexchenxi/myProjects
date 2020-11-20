<template>
	<div>
		<div class="header"> <img src="@/assets/logo.svg" alt="" class="company-logo common-float-left" />
			<ul
			 class="nav">
				<li @click="navTo(index)" :class="activeIndex==index?'nav-item active':'nav-item'"
				 v-for="(item,index) in indexList" :key="item.tagIndex">{{item.name}}</li>
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
					'tagIndex': 0,
					'routerPath': '/'
				}, {
					'name': '产品展示',
					'tagIndex': 1,
					'routerPath': '/element'
				}, {
					'name': '推广',
					'tagIndex': 2,
					'routerPath': '/element'
				}, {
					'name': '联系我们',
					'tagIndex': 3,
					'routerPath': '/element'
				}]
			}
		},
		name: 'Header',
		props: {
			activeIndex: [Number]
		},
		components: {},
		methods: {
			navTo(tabIndex) {
				if(tabIndex === this.activeIndex) return
				this.$message('即将进入页面' + tabIndex);
				this.$router.push(this.indexList[tabIndex].routerPath);
			}
		}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>