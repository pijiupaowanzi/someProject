<template>
	<div class="pt-65px p-x-5% m-auto">
		<ul class="color-#fff">
			<li class="mb-40px">
				<img src="@/assets/imgs/home/Logo.png" class="h-44px h-164px" />
			</li>
			<li class="border-b-1px pb-40px">
				<ul class="flex justify-between">
					<li class="w-1145px text-18px">
						<p>
							&ensp;&ensp;&ensp;&ensp;上海盟鼎网络科技有限公司（简称“盟鼎”）是中国领先的信息技术智能化应用平台，创立于2005年，注册资金1031万。业务领域涵盖互联网、通信、金融、汽车等。拥有自主研发的大数据技术、自动化测试平台和私域流量平台。致力于产业信息化、自动化、智能化。已成功为电信、平安等多家大中型企业提供了端到端的信息技术服务。
						</p>
						<p>
							&ensp;&ensp;&ensp;&ensp;盟鼎积极布局信息技术产业，全面构建智能化生态体系。通过测试业务精深业务理解，通过大数据技术精深数据理解，通过数据应用为客户提供价值服务。
						</p>
						<p>
							&ensp;&ensp;&ensp;&ensp;公司现有技术服务团队100多人，成员来自电信、华为、平安等知名企业，拥有通信、金融、管理等领域深厚的专业知识背景和丰富的从业经验。盟鼎一贯以锐意创新、精益求精、追求卓越的企业精神，营造了盟鼎良好的企业文化，并形成了企业核心价值观。
						</p>
					</li>
					<li class="flex-1 flex justify-center">
						<ul class="text-18px">
							<li>
								<img src="@/assets/imgs/footer/location.png" />
								上海市黄浦区绿地海外滩金融A座701/708
							</li>
							<li>
								<img src="@/assets/imgs/footer/phone.png" />
								86-21-63130028
							</li>
							<li>
								<img src="@/assets/imgs/footer/email.png" />
								<div>
									<p>联系我们：bd@harvestmoney.cn</p>
									<p>加入我们：hr@harvestmoney.cn</p>
								</div>
							</li>
						</ul>
					</li>
					<!-- <li class="w-480px">
            <a-input placeholder="请输入留言内容" allow-clear class="mb-36px h-50px mt-20px"/>
            <a-input placeholder="请输入验证码" allow-clear class="mb-36px h-50px"/>
            <a-button type="primary" status="danger" class="w-100% h-50px">提交</a-button>
          </li> -->
				</ul>
			</li>
			<li class="h-80px lh-80px text-center color-#C2C2C2 text-20px">
				版权所有©上海盟鼎网络科技有限公司&ensp;&ensp;备案号：沪ICP备09020820号—1
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.pt-65px {
	background: url('@/assets/imgs/footer/bg-firstPage-btm.png') no-repeat;
	background-size: cover;
	.flex-1 {
		li {
			margin: 30px;
			height: 24px;
			display: flex;
			align-items: center;
			p {
				margin-top: 10px;
			}
		}
		img {
			width: 24px;
			height: 24px;
			margin-right: 10px;
		}
	}
	ul {
		list-style: none;
		.w-1145px {
			p {
				margin: 5px;
				font-size: 18px;
				line-height: 2;
			}
		}
	}
}
</style>
