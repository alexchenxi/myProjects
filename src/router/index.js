import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import IndexElement from '@/components/Index_element'
import Echarts from '@/components/Echarts'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/element',
			name: 'IndexElement',
			component: IndexElement
		},
		{
			path: '/echarts',
			name: 'Echarts',
			component: Echarts
		}
	]
})