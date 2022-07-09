<template>
	<view class="content">
		<view class="content_1">
			<view class="content_1_1">
				<view class="content_1_1_1">首页</view>
				<view class="content_1_1_2">
					<image src="../../static/sousuo.webp" class="content_1_1_2_1" />
					<view class="content_1_1_2_2">乐播 | 团油 | 招商证券 | 腾讯大王卡</view>
				</view>
				<image class="content_1_1_3" src="../../static/xiaoxi.webp" />
			</view>
			<image class="content_1_2" src="../../static/banner_1.webp" />
		</view>
		<view class="content_2">
			<image class="content_2_1" src="../../static/ruzhuhuiyuan.webp" />
			<view class="content_2_2">
				<image class="content_2_2_1" src="../../static/renwudati.webp" />
				<image class="content_2_2_1" src="../../static/yaoqingyoul.webp" />
			</view>
		</view>
		<view class="content_3">
			<view class="content_3_1">
				<view class="content_3_1_1">
					<view class="content_3_1_1_1" />
					<view class="content_3_1_1_2">今日最热</view>
				</view>
				<view class="content_3_1_2">
					<view class="content_3_1_2_1">查看更多</view>
					<image class="content_3_1_2_2" src="../../static/fanhui.webp" />
				</view>
			</view>
			<view class="content_3_2">
				<TaskHot v-for="(item, index) in hotList" :key="index" :item="item" />
			</view>
		</view>
		<view class="content_4">
			<view class="content_4_1">
				<view class="content_4_1_1">
					<view class="content_4_1_1_1" />
					<view class="content_4_1_1_2">日常任务</view>
				</view>
				<view class="content_4_1_2">
					<view class="content_4_1_2_1">查看更多</view>
					<image class="content_4_1_2_2" src="../../static/fanhui.webp" />
				</view>
			</view>
			<view class="content_4_2">
				<TaskDay v-for="(item, index) in dayList" :key="index" :item="item" />
			</view>
		</view>
	</view>
</template>

<script>
import TaskHot from '../../components/Task_hot.vue'
import TaskDay from '../../components/Task_day.vue'
export default {
	data() {
		return {
			hotList: [
				{ logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "团油", tag: ['开卡', '邮寄到家'], price: "5.00", info: [3215, 119] },
				{ logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] }
			],
			dayList: [
				{ logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "团油", tag: ['开卡', '邮寄到家'], price: "5.00", info: [3215, 119] },
				{ logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] }
			],
		}
	},
	onLoad() { },
	methods: {},
	components: { TaskHot, TaskDay }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>