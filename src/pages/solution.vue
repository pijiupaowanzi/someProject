<template>
	<div class="sec1 h-100vh flex items-center">
		<div class="color-#fff pl-10%">
			<p class="text-50px" data-aos="fade-left">洞悉用户需求，聚焦行业发展</p>
			<p class="text-24px mt-33px" data-aos="fade-right">提供高质高效的服务解决方案</p>
		</div>
	</div>

	<div class="h-[calc(100vh+40px)] box-border pt-100px px-5% relative">
		<p class="text-50px color-#333 mb-40px" data-aos="fade-up">测试技术和服务解决方案</p>
		<div
			v-for="(item, index) in solution"
			:key="index"
			class="color-#333 box-border py-25px w-380px b-t b-#e6e6e6"
		>
			<p class="text-24px mb-10px font-bold" data-aos="fade-up">{{ item.title }}</p>
			<ul class="list-none" data-aos="fade-up" :data-aos-delay="item.delay">
				<li v-for="(itm, idx) in item.describe" :key="idx" class="lh-8">·&nbsp;{{ itm }}</li>
			</ul>
		</div>
		<img
			data-aos="fade-left"
			src="@/assets/imgs/solution/solution-sec2-r.png"
			class="absolute right-0 top-180px w-1100px h-690px"
		/>
	</div>

	<div class="h-35vh">
		<p class="text-50px lh-35vh text-center color-#fff">大数据能力平台解决方案</p>
	</div>
	<div class="h-70vh p-x-5% box-border pt-55px flex justify-center">
		<img src="@/assets/imgs/solution/solution-sec3-b.png" class="w-1100px h-530px" />
	</div>

	<div class="h-[calc(100vh+40px)] box-border pt-100px bg-#F6F6F6 color-#333">
		<p class="text-50px mb-85px pl-5%">大数据能力应用解决方案</p>
		<swiper
			:modules="modules"
			:loop="true"
			:slides-per-view="1"
			:space-between="50"
			:autoplay="{ delay: 5000, disableOnInteraction: false }"
			:pagination="{ clickable: true }"
		>
			<swiper-slide v-for="(item, index) in swiperData" :key="index">
				<div class="relative bg-#fff pl-5% h-540px box-border w-1414px">
					<div class="relative h-120px">
						<img src="@/assets/imgs/solution/yinhao.png" class="absolute w-80px" />
					</div>
					<p class="text-24px mb-35px font-bold">{{ item.title }}</p>
					<ul class="list-none">
						<li class="mb-30px text-20px" v-for="(itm, idx) in item.desc" :key="idx">{{ itm }}</li>
					</ul>
					<img :src="item.img" class="w-1070px h-540px absolute right--215px bottom--65px" />
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const modules = [Autoplay, Pagination, Navigation, Scrollbar]

const solution = [
	{
		title: '专业化职业测试团队',
		describe: ['测试设计工程师', '测试执行工程师', '测试架构师', '测试技术工程师'],
		delay: 100
	},
	{
		title: '自主研发自动化测试平台',
		describe: [
			'支持web测试',
			'支持APP测试',
			'支持接口测试',
			'支持性能测试',
			'支持无编程自动化测试用例'
		],
		delay: 200
	},
	{
		title: '平台应用',
		describe: [
			'自动化回归测试。现已管理海量的测试用例',
			'自动化晨检。自动化生产系统的健康度巡检，自动报告，自动发送短信，自动发送邮件',
			'自动化版本发布。高效减少人为失误'
		],
		delay: 300
	}
]

const swiperData = [
	{
		title: '综合市场分析',
		desc: [
			'新增用户行为描述',
			'存量用户价值聚类',
			'客户流失预测',
			'网格化数据运营',
			'端到端数据溯源和可视化展示'
		],
		img: new URL('../assets/imgs/solution/solution-swiper1.png', import.meta.url).href
	},
	{
		title: '用户画像',
		desc: [
			'支持定制化个体/群体画像',
			'支持用户价值聚类',
			'支持用户行为预测',
			'支持高效的API精准/模糊查询'
		],
		img: new URL('../assets/imgs/solution/solution-swiper2.png', import.meta.url).href
	},
	{
		title: '金融信息服务',
		desc: [
			'大企业间交叉数据分析',
			'智能化营销策略',
			'产品渠道资源配置优化',
			'精准营销',
			'实时数据统计与分析'
		],
		img: new URL('../assets/imgs/solution/solution-swiper3.png', import.meta.url).href
	}
]
</script>

<style lang="less" scoped>
.sec1 {
	background: url('@/assets/imgs/solution/solution-sec1-bg.png');
	background-size: 100% 100%;
}

.h-35vh {
	background: url('@/assets/imgs/solution/solution-sec3-t-bg.png');
	background-size: 100% 100%;
}

.bg-#F6F6F6 {
	ul {
		li {
			margin-bottom: 35px;
		}
	}
}
</style>
