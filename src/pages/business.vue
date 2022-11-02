<template>
	<div class="h-100vh pt-250px box-border">
		<swiper
			:modules="modules"
			:loop="true"
			:slides-per-view="1"
			:space-between="50"
			:autoplay="{ delay: 5000, disableOnInteraction: false }"
			:pagination="{ clickable: true }"
			@slideChange="onSlideChange"
			class="color-#fff"
		>
			<swiper-slide
				v-for="(item, index) in sec1Data"
				class="flex justify-center items-center"
				:key="index"
			>
				<div class="flex flex-col">
					<p class="text-50px mb-20px">{{ item.title }}</p>
					<p class="text-24px mb-55px">{{ item.secTitle }}</p>
					<p class="text-18px mb-50px w-485px lh-8">{{ item.desc }}</p>
					<a-anchor :change-hash="false" line-less>
						<div class="h-45px b-1 b-#e6e6e6 b-rd-4px lh-45px flex justify-evenly items-center">
							<a-anchor-link :href="item.anchor">了解一下</a-anchor-link>
							<img src="@/assets/imgs/business/arror.png" class="w-23px h-9px" />
						</div>
					</a-anchor>
				</div>
				<div class="relative">
					<img
						src="@/assets/imgs/business/swiper34.png"
						class="absolute z--10 scale-x-200 scale-y-120 right-0 top-0px"
						v-show="[2, 3].includes(swiperIndex)"
					/>
					<img :src="item.img" class="ml-220px" />
				</div>
			</swiper-slide>
		</swiper>
	</div>

	<div class="h-100vh p-x-5% pt-100px" id="fzcs">
		<p class="color-#333 text-50px mb-60px" data-aos="flip-right">仿真端到端测试 — 测试执行</p>
		<p class="color-#333 text-24px mb-20px" data-aos="flip-left">
			作为上海电信委托的第三方专业IT全业务集成测试厂商，承担以下七大运营管理责任。
		</p>
		<ul class="flex list-none" data-aos="flip-left">
			<li class="flex text-20px color-#999 mr-60px">
				<div class="bg-#2B95F1 p-10px" ></div>
				<span>&ensp;·业务运营&ensp;·系统维护&ensp;·系统建设</span>
			</li>
			<li class="flex text-20px color-#999 mr-60px">
				<div class="bg-#7AF172 p-10px" ></div>
				<span>&ensp;·业务运营&ensp;·系统维护</span>
			</li>
			<li class="flex text-20px color-#999">
				<div class="bg-#FF989D p-10px" ></div>
				<span>&ensp;·业务运营</span>
			</li>
		</ul>
		<img src="@/assets/imgs/business/ceshizhixing.png" class="block m-x-auto mt-60px" />
	</div>

	<div class="h-43vh color-#fff p-x-5% pt-150px">
		<p class="text-50px mb-45px" data-aos="fade-left">仿真测试特点 — 自动化回归</p>
		<p class="text-24px lh-10" data-aos="fade-right">
			仿真测试通过自主研发了自动化测试平台，通过先进的自动化测试工具，代替人力，高效实现大量回归测试场景
			<br />
			及生产环境的晨检，保障业务应用的快速迭代。
		</p>
	</div>
	<div class="h-49vh relative bg-#f6f6f6">
		<ul
			data-aos="slide-left"
			class="list-none bg-#fff b-rd-8px flex justify-center box-border h-450px p-x-30px p-y-90px absolute right-0 top--126px"
		>
			<li
				v-for="(item, index) in simulation"
				class="b-r-1 b-#707070 box-border p-x-60px"
				:key="index"
			>
				<img
					:src="item.img"
					class="w-60px h-60px mb-40px"
					data-aos="fade-down-left"
					:data-aos-delay="item.delay"
				/>
				<div
					class="w-305px text-20px color-#333 lh-8"
					data-aos="fade-up-right"
					:data-aos-delay="item.delay"
				>
					{{ item.desc }}
				</div>
			</li>
		</ul>
	</div>

	<div
		class="sec3 h-[calc(100vh+40px)] flex gap-135px items-center justify-center box-border pr-100px"
		id="kyrhb"
	>
		<img src="@/assets/imgs/business/swiper2.png" class="w-625px h-520px" data-aos="zoom-in" />
		<div>
			<p class="color-#fff text-50px mb-60px" data-aos="flip-down">跨域融合宽表 — 特点</p>
			<ul class="list-none flex flex-col w-840px color-#fff text-20px" data-aos="flip-up">
				<li>深化以用户体验和应用为中心，通过构建核心业务融合模型，实现IT数据模型拓展与转型。</li>
				<li>
					将业务、运营、管理、互联网等各域数据进行业务模型设计整合，并完整保留了业务的历史信息。实现数据融合、统一数据口径、统一数据规则。
				</li>
				<li>
					实现了数据采集整合引擎、宽表处理管理框架、核心计算引擎和丰富的数据输出接口等的技术实践与突破。
				</li>
				<li>
					在业务模型设计先行的前提下，紧贴上海电信业务转型战略要求，支持未来若干年大数据环境下的跨域业务的数据提取、统计、分析、挖掘，满足快速、简便、高效运营各专业的业务应用要求。
				</li>
				<li>
					业务价值
					<br />
					一个中心：一表知全貌；
					<br />
					四个能力：增值能力、中间能力、咨询能力、资产能力。
				</li>
			</ul>
		</div>
	</div>

	<div class="sec4 h-[calc(100vh+40px)] bg-#fff box-border pt-100px p-x-5% color-#333">
		<p class="text-50px" data-aos="fade-up">跨域融合大宽表 — 突破与创新</p>
		<ul class="list-none flex flex-col m-y-60px" data-aos="fade-up" data-aos-delay="50">
			<li>
				采用Hadoop Spark框架技术将跨域的数据在统一纬度进行整合，突破传统数据仓库字段宽度限制；
			</li>
			<li>创新应用数组形式完整保存业务的历史信息，为跨域数据的挖掘、分析提供统一的数据基础。</li>
			<li>
				在业务模型设计上，跨越了传统分域孤岛设计模型，将业务、运营、管理各专业数据域在业务含义上完成整合的同时，保证业务含义不扭曲，业务核心数据不缺失以保证业务信息完整，准确。
			</li>
		</ul>
		<div class="flex gap-99px justify-center">
			<img
				src="@/assets/imgs/business/kyrhdkb-blue.png"
				class="w-600px h-500px"
				data-aos="fade-up"
				data-aos-delay="100"
			/>
			<img
				src="@/assets/imgs/business/kyrhdkb-gray.png"
				class="w-600px h-500px"
				data-aos="fade-up"
				data-aos-delay="100"
			/>
		</div>
	</div>

	<div class="h-35vh" id="tjs">
		<p class="text-50px lh-35vh text-center color-#fff" data-aos="flip-down">
			图数据应用能力开放平台 — 实现功能
		</p>
	</div>
	<div class="h-70vh bg-#f6f6f6 p-x-5% box-border pt-100px">
		<ul class="list-none flex gap-40px">
			<li
				class="bg-#fff color-#e6e6e6 h-450px w-320px box-border p-x-42px pt-60px"
				v-for="(item, index) in features"
				data-aos="slide-up"
				:data-aos-delay="item.delay"
				:key="index"
			>
				<img
					:src="item.img"
					class="w-40px h-40px"
					data-aos="zoom-in"
					:data-aos-delay="item.delay"
				/>
				<div
					class="color-#333 text-20px mt-30px lh-8"
					data-aos="fade-up"
					:data-aos-delay="item.delay"
				>
					{{ item.desc }}
				</div>
			</li>
		</ul>
	</div>

	<div class="h-100vh box-border px-5% pt-100px">
		<p class="text-50px color-#333">图数据应用能力开放平台 — 业务成效</p>
		<div class="flex gap-50px">
			<ul class="w-980px">
				<li data-aos="flip-right" data-aos-delay="100">
					基于大数据平台的融合宽表跨域数据及其他数据源，立足IP网络资源核心关键属性，全面展开数据多视角业务模型设计。
				</li>
				<li data-aos="flip-right" data-aos-delay="200">
					平台整合资源信息，真实反映了上海本地网光纤接入网各层级设备链路拓扑关系及用户在网状况，业务效果达到了使用者查询信息量及直观效果焕然一新的感受和便捷感受。
				</li>
				<li data-aos="flip-right" data-aos-delay="300">
					解决和突破传统网络运维管理中各个部门使用各自的系统实现日常运维，跨部门跨系统运维分析，故障定位困难，对可能出现的带宽问题、设备资源投资难以进行全面的评估和测算的问题，大大提高网络运维效率，助力宽带智慧运营能力再提升。
				</li>
				<li data-aos="flip-right" data-aos-delay="400">
					图数据应用能力开放平台是融合宽表和图数据库工具IT架构创新实践，在技术层面数据整合处理、图数据库应用加载、图数据前台展现能力效果和性能等各类技术指标进行了验证和实践并取得了预期成绩。
				</li>
			</ul>
			<img src="@/assets/imgs/business/quanquandiandian.png" class="h-720px w-730px" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const modules = [Autoplay, Pagination, Navigation, Scrollbar]
const swiperIndex = ref<number>(0)

const sec1Data = [
	{
		title: 'Simulation Test',
		secTitle: '仿真测试',
		desc: '通过对生产业务系统应用上线前执行端到端测试、自动化回归测试、性能测试，保障业务系统上线的可靠性。',
		img: new URL('../assets/imgs/business/swiper1.png', import.meta.url).href,
		anchor: '#fzcs'
	},
	{
		title: 'Cross Domain Fusion Wide Table',
		secTitle: '跨域融合宽表',
		desc: '通过将跨域数据进行融合，形成超宽融合宽表，统一数据维度，整合业务口径，提高系统数据的可管理性和应用开发的便捷性。',
		img: new URL('../assets/imgs/business/swiper2.png', import.meta.url).href,
		anchor: '#kyrhb'
	},
	{
		title: 'Figure Calculation',
		secTitle: '图计算',
		desc: '结合图库及AI技术，对各类人、物、事及其关系进行统一建模管理和智能分析，实现拓扑展现和数据运算，为业务系统提供智能服务。',
		img: new URL('../assets/imgs/business/swiper3.png', import.meta.url).href,
		anchor: '#tjs'
	},
	{
		title: 'Private Domain Traffic',
		secTitle: '私域流量',
		desc: '通过互联网海量数据，结合人工智能和大数据技术，通过统一平台为用户提供客户画像、精准营销，垂直化内容运营等一系列定制服务。',
		img: new URL('../assets/imgs/business/swiper4.png', import.meta.url).href,
		anchor: '#'
	}
]

const onSlideChange = (swiper: any) => {
	swiperIndex.value = swiper.realIndex
}

const simulation = [
	{
		desc: '仿真测试设计从业务需求出发，直接通过对业务需求的分析完成测试案例设计，对业务负责，保障业务需求完整性；',
		img: new URL('../assets/imgs/business/yuanpan.png', import.meta.url).href,
		delay: 100
	},
	{
		desc: '自动化测试平台支持WEB、APP、IVR等多种类型的技术框架，满足从业务受理、开通、计费、开账、客服的端到端全流程自动化测试，全面保证业务系统稳定性；',
		img: new URL('../assets/imgs/business/sanjiao.png', import.meta.url).href,
		delay: 200
	},
	{
		desc: '支持WEB、APP、IVR等多种类型的业务系统；',
		img: new URL('../assets/imgs/business/lianjie.png', import.meta.url).href,
		delay: 300
	},
	{
		desc: '自动化测试平台实现无人值守的自动化案例执行管理，并进行运行结果分析统计。',
		img: new URL('../assets/imgs/business/zhexian.png', import.meta.url).href,
		delay: 400
	}
]

const features = [
	{
		img: new URL('../assets/imgs/business/shujuronghe.png', import.meta.url).href,
		desc: '以融合宽表为源数据充分整合光网资源各级设备及用户接入服务信息，创建IP网络数据端到端拓扑信息，如实展现IP数据各层设备情况、链路拓扑关系及核心要素。',
		delay: 100
	},
	{
		img: new URL('../assets/imgs/business/huizong.png', import.meta.url).href,
		desc: '对资源设备实现聚类统计，根据不同节点的属性变化，实现对设备数量、资源能力、服务情况、故障投诉等数据的汇总运算。',
		delay: 200
	},
	{
		img: new URL('../assets/imgs/business/suzhuangtu.png', import.meta.url).href,
		desc: '实现包含区局、分局等的过滤筛选，搜索查询功能，并将查询结果进行图表化如实呈现。',
		delay: 300
	},
	{
		img: new URL('../assets/imgs/business/anquan.png', import.meta.url).href,
		desc: '实现故障链路以及故障影响范围，在资源拓扑中的告警实时展现，端到端保障用户感知。',
		delay: 400
	},
	{
		img: new URL('../assets/imgs/business/xitongyunwei.png', import.meta.url).href,
		desc: '充分利用大数据平台及融合宽表实现整合数据的分析与挖掘，实现IP网络智慧运维能力再提升。',
		delay: 500
	}
]
</script>

<style scoped lang="less">
:deep(.arco-anchor-link) {
	color: #fff;
	&:hover,
	&:active {
		background-color: transparent !important;
		color: #fff;
	}
}
:deep(.arco-anchor-line-less .arco-anchor-link-active > .arco-anchor-link) {
	color: #fff !important;
	background-color: transparent !important;
}
.pt-250px {
	background: linear-gradient(90deg, #001437 0%, #000b17 100%);
}

.h-43vh {
	background: url('@/assets/imgs/business/fzcs-bg.png');
	background-size: 100% 100%;
}

.b-r-1:last-child {
	border: none;
}

.sec3 {
	background: linear-gradient(90deg, #001437 0%, #000b17 100%);
}

.w-840px {
	li {
		line-height: 35px;
		margin-top: 20px;
	}

	li:first-child {
		margin-top: 0;
	}
}

.sec4 {
	li {
		margin-top: 30px;
		font-size: 20px;
	}

	li:first-child {
		margin-top: 0;
	}
}

.h-35vh {
	background: url('@/assets/imgs/business/business-bg-35vh.png') no-repeat;
	background-size: 100% 100%;
}

.gap-50px {
	ul {
		li {
			box-sizing: border-box;
			padding: 42px 0;
			border-bottom: 1px solid #e6e6e6;
			font-size: 20px;
			color: #333;
			line-height: 35px;
		}

		li::marker {
			color: #2b95f1;
		}
	}
}
</style>
