<template>
	<view>
		<view class="content">
			<view class="content_1">
				<view class="content_1_1">
					<view class="content_1_1_1" @click="goEditInfo">
						<image class="content_1_1_1_1" :src="userInfo.head_image" />
						<image class="content_1_1_1_2" src="../../static/xiugai.webp" />
					</view>
					<view class="content_1_1_2">
						<view class="content_1_1_2_1">
							<view class="content_1_1_2_1_1">{{ userInfo.nick_name }}</view>
							<image class="content_1_1_2_1_2" src="../../static/vip.webp" />
							<view class="content_1_1_2_1_3">{{ userInfo.vip_level }}</view>
						</view>
						<view class="content_1_1_2_2">会员等级：{{ userInfo.vip_name }}</view>
					</view>
				</view>
				<view class="content_1_2">
					<view class="content_1_2_1" v-if="userInfo.rank_record == 1">您已成功入驻</view>
					<view class="content_1_2_2" v-else @click="goVip">我要入驻</view>
				</view>
				<!-- <image class="content_1_2" src="../../static/ruzhu-tu.webp" @click="goVip" /> -->
				<view class="content_1_3">我的任务</view>
			</view>
			<view class="content_2">
				<view class="content_2_1" @click="goMyTask">
					<image class="content_2_1_1" src="../../static/qbrw.webp" />
					<view class="content_2_1_2">全部任务</view>
				</view>
				<view class="content_2_1" @click="goMyTask">
					<image class="content_2_1_1" src="../../static/daitijiao.webp" />
					<view class="content_2_1_2">待提交</view>
					<view class="content_2_1_3" v-if="num1 != 0">{{ num1 }}</view>
				</view>
				<view class="content_2_1" @click="goMyTask">
					<image class="content_2_1_1" src="../../static/shenhz.webp" />
					<view class="content_2_1_2">审核中</view>
					<view class="content_2_1_3" v-if="num2 != 0">{{ num2 }}</view>
				</view>
				<view class="content_2_1" @click="goMyTask">
					<image class="content_2_1_1" src="../../static/yuitongg.webp" />
					<view class="content_2_1_2">已通过</view>
				</view>
				<view class="content_2_1" @click="goMyTask">
					<image class="content_2_1_1" src="../../static/weitongg.webp" />
					<view class="content_2_1_2">未通过</view>
					<view class="content_2_1_3" v-if="num3 != 0">{{ num3 }}</view>
				</view>
			</view>
			<view class="content_3">
				<view class="content_3_1">服务与工具</view>
				<view class="content_3_2">
					<view class="content_3_2_1" @click="goMyTeam">
						<image class="content_3_2_1_1" src="../../static/wodetd.webp" style="width:45rpx;height: 47rpx;" />
						<view class="content_3_2_1_2">我的团队</view>
					</view>
					<view class="content_3_2_1" @click="goVerified">
						<image class="content_3_2_1_1" src="../../static/shimrz.webp" style="width:40rpx;height: 47rpx;" />
						<view class="content_3_2_1_2">实名认证</view>
					</view>
					<view class="content_3_2_1" @click="goPromote">
						<image class="content_3_2_1_1" src="../../static/haibao.webp" style="width:41rpx;height: 50rpx;" />
						<view class="content_3_2_1_2">推广海报</view>
					</view>
					<view class="content_3_2_1" @click="goPointsMall">
						<image class="content_3_2_1_1" src="../../static/jfsc.webp" style="width:48rpx;height: 39rpx;" />
						<view class="content_3_2_1_2">积分商城</view>
					</view>
					<view class="content_3_2_1" @click="goFeedback">
						<image class="content_3_2_1_1" src="../../static/yijfk.webp" style="width:51rpx;height: 46rpx;" />
						<view class="content_3_2_1_2">问题反馈</view>
					</view>
					<view class="content_3_2_1" @click="goLeaderboard">
						<image class="content_3_2_1_1" src="../../static/paihangb.png" style="width:46rpx;height: 44rpx;" />
						<view class="content_3_2_1_2">排行榜</view>
					</view>
					<view class="content_3_2_1" @click="goRecord">
						<image class="content_3_2_1_1" src="../../static/tixianjl.webp" style="width:46rpx;height: 44rpx;" />
						<view class="content_3_2_1_2">提现记录</view>
					</view>
					<view class="content_3_2_1" @click="goSetting">
						<image class="content_3_2_1_1" src="../../static/shezhi.webp" style="width:46rpx;height: 44rpx;" />
						<view class="content_3_2_1_2">设置</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import {
	memberIndex
} from '../../utils/api'
export default {
	data() {
		return {
			userInfo: {},
			num1: 0,
			num2: 0,
			num3: 0,
		}
	},
	methods: {
		memberIndex() {
			memberIndex().then(res => {
				this.userInfo = res.data.member
				this.userInfo.head_image = `http://zxyj.xzxiaocaihua.cn/${this.userInfo.head_image}`
				// 删除userInfo中vip_level值中的"VIP"字段
				this.userInfo.vip_level = this.userInfo.vip_level.replace('VIP', '')
				res.data.num.forEach(item => {
					if (item.status == 1) this.num1 = item.num
					else if (item.status == 2) this.num2 = item.num
					else if (item.status == 4) this.num3 = item.num
				});
			})
		},
		goMyTask() {
			uni.navigateTo({
				url: '/pages/user/my_task'
			});
		},
		goMyTeam() {
			uni.navigateTo({
				url: '/pages/user/my_team'
			});
		},
		goVerified() {
			uni.navigateTo({
				url: '/pages/user/verified'
			});
		},
		goPromote() {
			let uuid = this.userInfo.uuid == null ? '暂无权限' : this.userInfo.uuid
			uni.navigateTo({
				url: `/pages/user/promote?uuid=${uuid}`
			});
		},
		goPointsMall() {
			uni.navigateTo({
				url: '/pages/user/points_mall'
			});
		},
		goFeedback() {
			uni.navigateTo({
				url: '/pages/user/feedback'
			});
		},
		goSetting() {
			uni.navigateTo({
				url: '/pages/user/settings'
			});
		},
		goVip() {
			uni.navigateTo({
				url: '/pages/user/vip'
			});
		},
		goEditInfo() {
			uni.navigateTo({
				url: '/pages/user/edit_info'
			});
		},
		goLeaderboard() {
			uni.navigateTo({
				url: '/pages/user/leaderboard'
			});
		},
		goRecord() {
			uni.navigateTo({
				url: '/pages/user/record'
			});
		},
	},
	onShow() {
		this.num1 = 0
		this.num2 = 0
		this.num3 = 0
		this.memberIndex()
	},
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
