<template>
	<div class="flex justify-between w-80% m-auto h-80px items-center">
		<img v-if="!showOtherType" src="@/assets/imgs/home/Logo.png" class="h-44px h-164px" />
		<img v-else src="@/assets/imgs/join/logo-deep.png" class="h-44px h-164px" />
		<ul
			class="flex w-500px justify-between list-none text-20px h-100% color-#fff"
			:class="{ otherType: showOtherType }"
		>
			<li
				v-for="(item, index) in navigate"
				:key="index"
				@click="jumpRoute(item.key, index)"
				:class="{ showAfter: navIndex === index }"
			>
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import router from '@/router'
import { onBeforeMount, ref } from 'vue'
import getNavStore from '@/store/modules/navigationStore'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const showOtherType = ref<boolean>(false)
const { navIndex } = storeToRefs(getNavStore())
watch(navIndex, newValue => {
	if (newValue === 0) {
		showOtherType.value = false
	}
})

const navigate = [
	{
		name: '首页',
		key: '/home'
	},
	{
		name: '产品业务',
		key: '/business'
	},
	{
		name: '解决方案',
		key: '/solution'
	},
	{
		name: '客户案例',
		key: '/clientcase'
	},
	{
		name: '加入盟鼎',
		key: '/joinMD'
	}
]
const handleOtherType = (index: number) => {
	switch (index) {
		case 0:
		case 1:
		case 2:
			showOtherType.value = false
			break
		case 3:
		case 4:
			showOtherType.value = true
			break
	}
}
const jumpRoute = (route: string, routeIndex: number) => {
	navIndex.value = routeIndex
	router.push(route)
	handleOtherType(routeIndex)
}

onBeforeMount(() => {
	handleOtherType(navIndex.value)
})
</script>

<style lang="less" scoped>
@keyframes trans {
	0% {
		width: 0;
	}
	100% {
		width: 100%;
	}
}
.w-500px {
	li {
		cursor: pointer;
		line-height: 80px;
	}
	.showAfter::after {
		content: '';
		display: block;
		height: 2px;
		animation: trans 0.15s ease-in-out 1 backwards;
		background: linear-gradient(
			270deg,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(255, 255, 255, 0.69) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}
}
.otherType {
	color: #333;
	.showAfter::after {
		background: linear-gradient(
			270deg,
			rgba(255, 255, 255, 0.5) 0%,
			rgba(0, 0, 0, 0.69) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}
}
</style>
