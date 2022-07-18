<template>
	<view>
		<view class="head">
			<view class="head_1">
				<view class="head_1_1">
					<image class="head_1_1_1" src="../../static/fanhui_w.webp" />
				</view>
				<view class="head_2_1">入驻会员</view>
				<view class="head_3_1" />
			</view>
		</view>
		<view class="content">
			<view class="content_1">
				<view class="content_1_1">
					<view class="content_1_1_1">推荐</view>
					<view class="content_1_1_2">钻石会员</view>
					<view class="content_1_1_3">有限期：永久</view>
					<view class="content_1_1_4">开通会员获得推广权限以及推广积分奖励</view>
				</view>
				<view class="content_1_2">
					<view class="content_1_2_1">
						<view class="content_1_2_1_1">钻石会员</view>
						<view class="content_1_2_1_2">￥100.00</view>
						<view class="content_1_2_1_3">永久</view>
					</view>
				</view>
			</view>
			<view class="content_2">
				<view class="content_2_1">保证金规则</view>
				<view class="content_2_2">1、不建议充值系统服务费获得推广资格</view>
				<view class="content_2_2">2、建议以做任务奖励方式获得推广资格</view>
				<view class="content_2_2">3、完全遵循资源原则充值系统服务费</view>
				<view class="content_2_2">4、一个月内完成任务奖励100元全额退还</view>
			</view>
		</view>
		<view class="btn">
			<view class="btn_1" @click="submit">立即开通</view>
		</view>
		<u-modal :show="show" content='您已成功开通钻石会员' @confirm="back"></u-modal>
	</view>
</template>

<script>
import {
	wxpay
} from '../../utils/api.js'
export default {
	data() {
		return {
			show: false
		}
	},
	methods: {
		async submit() {
			uni.showLoading({
				title: '正在为您开通'
			})
			const orderInfo = await wxpay()
			uni.requestPayment({
				provider: 'wxpay',
				orderInfo,
				success(res) {
					uni.hideLoading()
					this.show = true
				},
				fail(err) {
					console.log(err)
					uni.hideLoading()
					if (err.code == -8) {
						uni.$u.toast('请先安装微信');
					}
				}
			})
		},
		back() {
			uni.navigateBack()
		},
	}
}
}
</script>

<style lang="scss" scoped>
@import './vip.scss';

/deep/ .u-modal__content__text {
	text-align: center;
}
</style>
