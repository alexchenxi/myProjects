<template>
	<div class="container">
		<Header :activeIndex=0></Header>
		<div class="main">
			<div class="banner-container">
				<el-carousel type="card" height="480px">
					<el-carousel-item v-for="(item,index) in bannerList" :key="index"> <img style :src="item" alt="" /> </el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import Header from '@/components/common/Header'
	import Footer from '@/components/common/Footer'
	export default {
		name: 'Index',
		components: {
			Header,
			Footer
		},
		data() {
			return {
				bannerList: ['http://img.yao51.com/jiankangtuku/hijjbdiz.jpeg', 'http://img.yao51.com/jiankangtuku/phoomcdv.jpeg', 'http://img.yao51.com/jiankangtuku/nghhqssy.jpeg', 'http://img.yao51.com/jiankangtuku/ahccseax.jpeg']
			}
		},
		created() {
			this.$message('welcome to the league of Draven');
		}
	}
</script>
<style lang='less' scoped>
	.banner-container {
		margin: 0 auto;
		width: 100%;
		height: 580px;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #FFF;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #FFF;
	}
	
	.el-carousel__item > img {
		border-radius: 2%;
		width: 100%;
		height: 100%;
	}
</style>