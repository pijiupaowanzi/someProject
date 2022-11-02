import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { close, start } from '@/utils/editNprogress'
import getNavStore from '@/store/modules/navigationStore'
import { storeToRefs } from 'pinia'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		name: 'home',
		path: '/home',
		meta: {
			title: '盟鼎官网首页'
		},
		component: () => import('@/pages/home.vue')
	},
	{
		name: 'business',
		path: '/business',
		meta: {
			title: '产品业务'
		},
		component: () => import('@/pages/business.vue')
	},
	{
		name: 'solution',
		path: '/solution',
		meta: {
			title: '解决方案'
		},
		component: () => import('@/pages/solution.vue')
	},
	{
		name: 'clientcase',
		path: '/clientcase',
		meta: {
			title: '客户案例'
		},
		component: () => import('@/pages/clientcase.vue')
	},
	{
		name: 'joinMD',
		path: '/joinMD',
		meta: {
			title: '加入盟鼎'
		},
		component: () => import('@/pages/joinMD.vue')
	},
	{
		path: '/:catchAll(.*)',
		redirect: '/home'
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

router.beforeEach((to, _from, next) => {
	document.title = to.meta.title as string
	if (to.redirectedFrom) {
		const { navIndex } = storeToRefs(getNavStore())
		navIndex.value = 0
	}
	next()
	start()
})

router.afterEach(() => {
	close()
})

export default router
