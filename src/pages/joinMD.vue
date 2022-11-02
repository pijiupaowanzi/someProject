<template>
	<div class="sec1 h-100vh flex items-center justify-center">
		<div class="flex flex-col justify-center items-center gap-40px">
			<img src="@/assets/imgs/join/joinMD-sec1.dream.png" class="w-715px h-112px" >
			<!-- <a-input-search placeholder="搜索工作岗位" class="w-400px h-48px bg-[rgba(0,0,0,0)] b-color-#333"/> -->
		</div>
		<img
			src="@/assets/imgs/join/half-circle.png"
			class="absolute bottom-0 right-0 w-615px h-366px"
		>
		<img
			src="@/assets/imgs/join/circle.png"
			class="w-57px h-57px absolute right-61px bottom-445px"
		>
	</div>

	<div class="box-border px-10% py-100px">
		<div class="flex justify-between color-#333 mb-15px">
			<span class="text-60px">正在招聘</span>
			<span class="lh-60px text-24px">工作地点：上海</span>
		</div>
		<p class="text-24px mb-50px">
			<a href="mailto:HR2@summiteam.net" class="decoration-none color-#2B95F1">
				简历请发送至 hr@harvestmoney.cn
			</a>
		</p>
		<a-collapse expand-icon-position="right" :bordered="false">
			<template #expand-icon="{ active }">
				<icon-up v-if="active" :size="20" />
				<icon-down v-else :size="20" class="color-#2B95F1" />
			</template>
			<a-collapse-item header="测试工程师" key="1" class="color-#333 font-bold text-20px">
				<div>任职要求：</div>
				<div>1．本科（含）以上学历；</div>
				<div>2．熟悉测试流程和 Bug 管理工具；</div>
				<div>3．掌握软件工程、软件测试理论、测试流程及方法；</div>
				<div>4．至少掌握一种主流数据库（ oracle , sqlserver , mysq !)，能编写 SQL 语句；</div>
				<div>5．能与开发人员及时沟通，协助开发人员解决 Bug；</div>
				<div>6．注重用户体验，帮助开发人员完善功能开发；</div>
				<div>7．有较强理解能力、自学能力和良好的沟通能力；</div>
				<div>8．一年以上软件测试工作经验；</div>
				<div>
					9．拥有 Linux 平台下编程或脚本语言（ linux Shel 、 Python 、 perl 、 php 等）者优先。
				</div>
			</a-collapse-item>
			<a-collapse-item header="数据挖掘工程师" key="2">
				<div>任职要求：</div>
				<div>1．扎实的编码能力与算法基础。熟悉 Linux 平台下的 JAVA 语言开发；</div>
				<div>2．深刻理解并熟练掌握机器学习、统计学、数据挖掘的算法和技术；</div>
				<div>3．至少掌握 Perl / Python / Linux Shell 中的一种；</div>
				<div>4．有相关的自然语言处理／数据挖掘／机器学习／优化理论的研究和项目经验者优先；</div>
				<div>5．有较强的学习能力，并且能够快速实现数学模型；</div>
				<div>6．创新精神，对互联网领域有热情；</div>
				<div>7．计算机，应用数学，统计，电子工程及相关专业，本科及以上学历。</div>
			</a-collapse-item>
			<a-collapse-item header="Hadoop开发工程师" key="3">
				<div>任职要求：</div>
				<div>1．计算机或相关专业本科以上学历，具有扎实的算法和数据结构基础；</div>
				<div>
					2．一年以上 Hadoop / Hbase / HIVE / Storm 开发经验，或者有相关的分布式平台开发经验者；
				</div>
				<div>3．精通 Java ，熟悉 java 开发工具；</div>
				<div>4．对 Hadoop 源代码有研究和有贡献者优先；</div>
				<div>5．有海量数据挖掘算法开发经验者优先；</div>
				<div>6．较好的沟通理解能力，优秀的团队合作品质，乐观向上，踏实上进；</div>
				<div>7．熟悉 linux 系统，包括 shell / python 等语言开发。</div>
			</a-collapse-item>
			<a-collapse-item header="Hadoop运维" key="4">
				<div>任职要求：</div>
				<div>1．大学本科及以上学历，具有良好的学习能力、沟通能力、团队合作能力及适应能力；</div>
				<div>
					2．掌握目前主流 Linux 操作系统（ ubuntu / centos / redhat
					）的配置、管理及优化，能够独立排查及解决操作系统层的各类问题；
				</div>
				<div>
					3．3年以上大规模 hadoop 集群的运维经验，熟悉 ganglia / salt / puppet
					等监控和配置管理工具；
				</div>
				<div>4．掌握 Python / Shell / Java 中至1种开发语言；</div>
				<div>5．能够结合产品需求制定并实施综合运维技术方案；</div>
				<div>
					6．具备 Hadoop / Hbase / Hive / Zookeeper / Spark
					等大规模（500台以上）集群运维经验者优先；
				</div>
				<div>7．能维护 Hadoop 源码，有 Hadoop 源代码 BUG 修复或者源代码优化经验者优先；</div>
				<div>8．具备搜索引擎、电子商务平台、云计算平台的开发、运维经验者优先；</div>
				<div>9．强烈的主动性与工作责任心，对所负责工作有 owner 意识，并能自我驱动不断成长。</div>
			</a-collapse-item>
		</a-collapse>
	</div>
</template>

<script setup lang="ts">
import { IconUp, IconDown } from '@arco-design/web-vue/es/icon'
</script>

<style lang="less" scoped>
.sec1 {
	background: url('@/assets/imgs/join/joinMD-sec1-bg.png');
	background-size: 100% 100%;
}

:deep(.arco-collapse-item-content) {
	padding: 0 50px;
	background: linear-gradient(90deg, #f4f8fe 0%, #bddbff 100%);

	div:first-child {
		padding-top: 15px;
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 15px;
	}

	div {
		font-size: 18px;
		margin-bottom: 10px;
	}
}

:deep(.arco-collapse-item-header-title) {
	font-size: 20px;
}

:deep(.arco-collapse-item) {
	margin-bottom: 60px;
}
</style>
