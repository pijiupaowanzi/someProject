<template>
	<div class="sec1 h-100vh flex justify-center items-center">
		<img src="@/assets/imgs/home/ball.png" class="h-500px w-500px" />
		<div class="text-80px color-#fff absolute font-thin" data-aos="zoom-out">执着追求 完美品质</div>
	</div>

	<div class="sec2 h-100vh relative pt-130px of-x-hidden">
		<div
			class="h-680px w-70% bg-#fff p-x-130px pt-90px"
			data-aos="fade-right"
			data-aos-anchor-placement="center-bottom"
		>
			<p class="text-70px pb-70px">盟鼎网络科技</p>
			<ul class="list-none text-20px lh-10">
				<li>
					&ensp;&ensp;&ensp;&ensp;上海盟鼎网络科技有限公司（简称&nbsp;“盟鼎”&nbsp;）是中国领先的信息技术智能化应用平台，创立于2005年，注册资金1031万。业务领域涵盖互联网、通信、金融、汽车等。拥有自主研发的大数据技术、自动化测试平台和私域流量平台。致力于产业信息化、自动化、智能化。已成功为电信、平安等多家大中型企业提供了端到端的信息技术服务。
				</li>
				<li>
					&ensp;&ensp;&ensp;&ensp;盟鼎积极布局信息技术产业，全面构建智能化生态体系。通过测试业务精深业务理解，通过大数据技术精深数据理解，通过数据应用为客户提供价值服务。
				</li>
				<li>
					&ensp;&ensp;&ensp;&ensp;公司现有技术服务团队100多人，成员来自电信、华为、平安等知名企业，拥有通信、金融、管理等领域深厚的专业知识背景和丰富
					的从业经验。盟鼎一贯以锐意创新、精益求精、追求卓越的企业精神，营造了盟鼎良好的企业文化，并形成了企业核心价值观。
				</li>
			</ul>
		</div>
	</div>

	<div class="sec3 h-100vh flex flex-col justify-evenly p-x-5% of-x-hidden">
		<div class="color-#fff">
			<p class="text-50px mb-45px" data-aos="fade-down">洞察行业 为客户提供价值服务</p>
			<p class="mb-25px text-24px" data-aos="fade-right">
				深刻理解行业属性，精准把握行业发展方向。盟鼎积极布局信息技术产业，全面构建智能化生态体系。
			</p>
			<p class="text-24px" data-aos="fade-right">
				通过测试业务精深业务理解，通过大数据技术精深数据理解，通过数据应用为客户提供价值服务。
			</p>
		</div>
		<ul class="list-none flex justify-between color-#fff">
			<li v-for="(item, index) in insightRef" class="h-400px w-350px relative" :key="index">
				<img :src="item.image" class="w-285px h-245px ml-30px" />
				<img
					:src="item.icon"
					:data-aos-delay="item.delay"
					data-aos="zoom-in"
					class="w-80px h-90px absolute op-80 top-50px left-40%"
				/>
				<p class="text-24px mb-30px text-center" :data-aos-delay="item.delay" data-aos="fade-left">
					{{ item.name }}
				</p>
				<p class="text-16px text-center" :data-aos-delay="item.delay" data-aos="fade-right">
					{{ item.describe }}
				</p>
			</li>
		</ul>
	</div>

	<div class="sec4 h-100vh p-x-5% pt-65px of-x-hidden">
		<p class="text-50px color-#707070 lh-20" data-aos="flip-right">
			深耕业务
			<br />
			引领行业服务标准建设
		</p>
		<p class="text-24px color-#333" data-aos="flip-left">
			致力于产业信息化、自动化、智能化。已成功为电信、平安等多家大中型企业提供了端到端的信息技术服务。
		</p>
		<ul class="list-none mt-50px">
			<li
				v-for="(item, index) in business"
				class="border-t-1 flex justify-between items-center h-230px"
				:data-aos="'slide-' + item.slide"
				:key="index"
			>
				<span class="text-60px color-#999">{{ item.num }}</span>
				<span class="text-20px color-#707070">{{ item.describe }}</span>
				<img :src="item.img" class="h-84px w-84px" />
			</li>
		</ul>
	</div>

	<div class="sec5 h-100vh pt-111px">
		<p class="pl-9% text-50px color-#fff mb-111px" data-aos="fade-up">合作伙伴</p>
		<div class="flex flex-wrap w-1010px justify-between m-auto">
			<img
				v-for="(item, index) in partner"
				:src="item.img"
				class="w-270px mb-100px"
				data-aos="zoom-in"
				:data-aos-delay="item.delay"
				:key="index"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const insightRef = ref<any>([
	{
		image: new URL('../assets/imgs/home/four-fzcs.png', import.meta.url).href,
		name: '仿真测试',
		describe:
			'通过对生产业务系统应用上线前执行端到端测试、自动化回归测试、性能测试，保障业务系统上线的可靠性。',
		icon: new URL('../assets/imgs/home/ceshi.png', import.meta.url).href,
		delay: 0
	},
	{
		image: new URL('../assets/imgs/home/four-kyrhkb.png', import.meta.url).href,
		name: '跨域融合宽表',
		describe:
			'通过将跨域数据进行融合，形成超宽融合宽表、统一数据维度、整合业务口径、提高系统数据的可管理性和应用开发的便捷性。',
		icon: new URL('../assets/imgs/home/kuanbiao.png', import.meta.url).href,
		delay: 150
	},
	{
		image: new URL('../assets/imgs/home/four-tjs.png', import.meta.url).href,
		name: '图计算',
		describe:
			'结合图库及AI技术，对各类人、物、事及其关系进行统一建模管理和智能分析，实现拓扑展现和数据运算，为业务系统提供智能服务。',
		icon: new URL('../assets/imgs/home/tujisuan.png', import.meta.url).href,
		delay: 300
	},
	{
		image: new URL('../assets/imgs/home/four-syll.png', import.meta.url).href,
		name: '私域流量',
		describe:
			'通过互联网海量数据，结合人工智能和大数据技术，通过统一平台为用户提供客户画像、精准营销、垂直化内容运营等一系列定制服务。',
		icon: new URL('../assets/imgs/home/liuliang.png', import.meta.url).href,
		delay: 450
	}
])
const business = ref<any>([
	{
		num: '01',
		describe:
			'通信行业及金融行业17年从业经验，拥有自主研发的大数据技术、自动化测试平台和私域流量平台',
		img: new URL('../assets/imgs/home/tongxin.png', import.meta.url).href,
		slide: 'right'
	},
	{
		num: '02',
		describe:
			'成员来自电信、华为、平安等知名企业，拥有通信、金融、管理等领域深厚的专业知识背景和丰富的从业经验',
		img: new URL('../assets/imgs/home/yanfa.png', import.meta.url).href,
		slide: 'left'
	},
	{
		num: '03',
		describe: '拥有近百人技术团队，产品及解决方案屡获大奖',
		img: new URL('../assets/imgs/home/tuandui.png', import.meta.url).href,
		slide: 'right'
	}
])
const partner = ref<any>([
	{
		img: new URL('../assets/imgs/home/dianxin.png', import.meta.url).href,
		delay: 0
	},
	{
		img: new URL('../assets/imgs/home/yidong.png', import.meta.url).href,
		delay: 150
	},
	{
		img: new URL('../assets/imgs/home/liantong.png', import.meta.url).href,
		delay: 300
	},
	{
		img: new URL('../assets/imgs/home/pingan.png', import.meta.url).href,
		delay: 450
	},
	{
		img: new URL('../assets/imgs/home/baoxian.png', import.meta.url).href,
		delay: 600
	},
	{
		img: new URL('../assets/imgs/home/tietong.png', import.meta.url).href,
		delay: 750
	}
])
</script>

<style lang="less" scoped>
.sec1 {
	background: url('@/assets/imgs/home/bg-firstPage1.png') no-repeat;
	background-size: 100% 100%;
}
.sec2 {
	background: url('@/assets/imgs/home/bg-firstPage2.png');
	background-size: 100% 100%;
}
.sec3 {
	background: url('@/assets/imgs/home/bg-firstPage3.png');
	background-size: 100% 100%;
}
.sec4 {
	background: url('@/assets/imgs/home/bg-firstPage4.png');
	background-size: 100% 100%;
}
.sec5 {
	background: url('@/assets/imgs/home/bg-firstPage5.png');
	background-size: 100% 100%;
}
</style>
