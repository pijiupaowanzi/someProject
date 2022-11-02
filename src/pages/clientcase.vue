<template>
	<div class="sec1 h-100vh flex items-center justify-center">
		<div class="color-#333">
			<p class="text-50px" data-aos="fade-up">洞悉用户需求，聚焦行业发展</p>
			<p class="text-24px mt-33px" data-aos="fade-up" data-aos-delay="100">
				提供高质高效的服务解决方案
			</p>
		</div>
	</div>

	<div class="h-[calc(100vh+40px)] box-border pt-125px text-right relative w-100vw of-hidden">
		<div class="relative">
			<div
				data-aos="slide-right"
				class="bg-#4979FF w-960px h-170px absolute bottom-3px color-#fff box-border pt-30px pr-20px z-10"
			>
				<p class="text-50px pl-388px text-left mb-20px">懂 · 行业</p>
				<p class="text-24px">深耕互联网、通信、金融、汽车，解决行业痛点问题</p>
			</div>
			<img
				src="@/assets/imgs/clientcase/clientcase-sec2.png"
				class="w-1530px h-440px"
				data-aos="slide-left"
			>
		</div>
		<ul class="loop1 list-none mt-80px flex gap-30px of-hidden text-left absolute">
			<li v-for="(item, index) in rollData" :key="index">
				<img :src="item.img" class="h-210px w-330px mb-20px" >
				<p>{{ item.title }}</p>
			</li>
		</ul>
		<ul class="loop2 list-none mt-80px flex gap-30px of-hidden text-left absolute">
			<li v-for="(item, index) in rollData" :key="index">
				<img :src="item.img" class="h-210px w-330px mb-20px" >
				<p>{{ item.title }}</p>
			</li>
		</ul>
	</div>

	<div class="h-[calc(100vh+40px)] box-border p-100px">
		<p class="color-#333 text-50px mb-80px">我们的荣誉</p>
		<img src="@/assets/imgs/clientcase/honours.png" class="w-1350px h-590px block m-auto" >
	</div>
</template>

<script setup lang="ts">
const rollData = [
	{
		title: '/中国电信',
		img: new URL('../assets/imgs/clientcase/clientcase-client1.png', import.meta.url).href
	},
	{
		title: '/中国移动通信',
		img: new URL('../assets/imgs/clientcase/clientcase-client2.png', import.meta.url).href
	},
	{
		title: '/中国联通',
		img: new URL('../assets/imgs/clientcase/clientcase-client3.png', import.meta.url).href
	},
	{
		title: '/中国平安',
		img: new URL('../assets/imgs/clientcase/clientcase-client4.png', import.meta.url).href
	},
	{
		title: '/太平洋保险',
		img: new URL('../assets/imgs/clientcase/clientcase-client5.png', import.meta.url).href
	},
	{
		title: '/中国铁通',
		img: new URL('../assets/imgs/clientcase/clientcase-client6.png', import.meta.url).href
	},
	{
		title: '/GM',
		img: new URL('../assets/imgs/clientcase/clientcase-client7.png', import.meta.url).href
	}
]
</script>

<style lang="less" scoped>
.sec1 {
	background: url('@/assets/imgs/clientcase/clientcase-sec1-bg.png');
	background-size: 100% 100%;
}
.loop1 {
	animation: loopImgfirst 15s linear infinite;
}
.loop2 {
	animation: loopImgsec 15s linear infinite;
}

@keyframes loopImgfirst {
	0% {
		left: 0;
	}
	100% {
		left: 2520px;
	}
}
@keyframes loopImgsec {
	0% {
		left: -2520px;
	}
	100% {
		left: 0;
	}
}
</style>
