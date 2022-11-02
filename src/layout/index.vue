<template>
	<a-layout class="h-100vh">
		<a-layout-header class="absolute top-0 w-100%">
			<Navigate />
		</a-layout-header>
		<a-layout-content>
			<router-view />
			<a-back-top :visible-height="500" class="right-50px bottom-100px">
				<a-button>回到顶部</a-button>
			</a-back-top>
		</a-layout-content>
		<a-layout-footer>
			<Footer />
		</a-layout-footer>
	</a-layout>
</template>

<script setup lang="ts">
import Navigate from '@/layout/components/Navigate.vue'
import { ref } from 'vue'
import Footer from './components/Footer.vue'

const timer = ref<any>()

window.addEventListener('scroll', () => {
	document.body.toggleAttribute('scroll', true)
	timer.value && clearTimeout(timer.value)
	timer.value = setTimeout(() => {
		document.body.toggleAttribute('scroll')
	}, 500)
})
</script>

<style lang="less" scoped></style>
