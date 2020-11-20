<template>
	<div class="container">
		<div class="header"> <img src="../assets/logo.svg" alt="" class="company_logo" />{{msg}}
			<ul class="nav">
				<li class="nav-item">首页</li>
				<li class="nav-item">首页</li>
				<li class="nav-item">首页</li>
				<li class="nav-item">首页</li>
			</ul>
		</div>
		<div class="main">
			<el-badge :value="12" class="item">
				<el-button size="small">评论</el-button>
			</el-badge>
			<el-badge :value="3" class="item">
				<el-button size="small">回复</el-button>
			</el-badge>
			<el-badge :value="1" class="item" type="primary">
				<el-button size="small">评论</el-button>
			</el-badge>
			<el-badge :value="2" class="item" type="warning">
				<el-button size="small">回复</el-button>
			</el-badge>
			<el-dropdown trigger="click"> <span class="el-dropdown-link">
				    点我查看
				    <i class="el-icon-caret-bottom el-icon--right"></i>
				 </span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item class="clearfix"> 评论
						<el-badge class="mark" :value="12" /> </el-dropdown-item>
					<el-dropdown-item class="clearfix"> 回复
						<el-badge class="mark" :value="3" /> </el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
			<el-badge :value="200" :max="99" class="item">
				<el-button size="small">评论</el-button>
			</el-badge>
			<el-badge :value="100" :max="10" class="item" type="info">
				<el-button size="small">info</el-button>
			</el-badge>
			<el-badge :value="100" :max="10" class="item" type="primary">
				<el-button size="small">primary</el-button>
			</el-badge>
			<el-badge :value="100" :max="10" class="item" type="success">
				<el-button size="small">success</el-button>
			</el-badge>
			<el-badge :value="100" :max="10" class="item" type="danger">
				<el-button size="small">danger</el-button>
			</el-badge>
			<el-badge :value="100" :max="10" class="item" type="warning">
				<el-button size="small">warning</el-button>
			</el-badge>
			<div>
				<el-alert title="不可关闭的 alert" type="success" :closable="false" show-icon center> </el-alert>
				<el-alert title="自定义 close-text" type="info" close-text="知道了"> </el-alert>
				<el-alert title="设置了回调的 alert" type="warning" @close="hello"> </el-alert>
			</div>
			<div>
				<el-button :plain="true" @click="openVn">VNode</el-button>
			</div>
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item>首页</el-breadcrumb-item>
				<el-breadcrumb-item><span @click="goLevel(2)" class="bread_item">张三</span></el-breadcrumb-item>
				<el-breadcrumb-item>李四</el-breadcrumb-item>
				<el-breadcrumb-item>王五</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Index',
		data() {
			return {
				msg: 'welcome to the league of Element-UI',
				activeIndex: '1'
			}
		},
		created() {
			this.openFullScreen2();
			this.$message('welcome to the league of Element-UI');
		},
		methods: {
			goLevel(level) {
				this.$message({
					message: level,
					center: true
				});
			},
			hello() {
				this.$message('Hello World!');
			},
			openFullScreen2() {
				const loading = this.$loading({
					lock: true,
					text: '拼命加载中',
					spinner: 'el-icon-loading',
					background: 'rgba(0, 0, 0, 0.5)'
				});
				setTimeout(() => {
					loading.close();
				}, 1000);
			},
			openVn() {
				const h = this.$createElement;
				this.$message({
					type: 'warning',
					dangerouslyUseHTMLString: true,
					message: '<strong style="color: red;">这是 <i>HTML</i> 片段</strong>',
					duration: '5000'
				});
			}
		}
	}
</script>
<style>
	.company_logo {
		float: left;
	}
	
	.item {
		margin-top: 10px;
		margin-right: 40px;
	}
	
	.bread_item {
		cursor: pointer;
	}
</style>