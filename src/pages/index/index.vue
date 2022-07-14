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
			<image class="content_1_2" :src="banner" v-if="banner" />
		</view>
		<view class="content_2">
			<image class="content_2_1" src="../../static/ruzhuhuiyuan.webp" @click="goVip" />
			<view class="content_2_2">
				<image class="content_2_2_1" src="../../static/renwudati.webp" @click="goHall" />
				<image class="content_2_2_1" src="../../static/yaoqingyoul.webp" @click="goPromote" />
			</view>
		</view>
		<view class="content_3">
			<view class="content_3_1">
				<view class="content_3_1_1">
					<view class="content_3_1_1_1" />
					<view class="content_3_1_1_2">今日最热</view>
				</view>
				<view class="content_3_1_2">
					<view class="content_3_1_2_1" @click="goHall">查看更多</view>
					<image class="content_3_1_2_2" src="../../static/fanhui.webp" />
				</view>
			</view>
			<view class="content_3_2">
				<TaskHot v-for="(item, index) in hotListData" :key="index" :item="item" />
			</view>
		</view>
		<view class="content_4">
			<view class="content_4_1">
				<view class="content_4_1_1">
					<view class="content_4_1_1_1" />
					<view class="content_4_1_1_2">日常任务</view>
				</view>
				<view class="content_4_1_2">
					<view class="content_4_1_2_1" @click="goHall">查看更多</view>
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
import { bannerList, hotList, list } from '../../utils/api'
export default {
	data() {
		return {
			hotListData: [],
			dayList: [],
			banner: "",
			hotListParams: { page: 1, num: 4 },
			listParams: { page: 1, num: 10 },
		}
	},
	onLoad() { },
	methods: {
		bannerList() {
			bannerList().then(res => {
				this.banner = `http://zxyj.xzxiaocaihua.cn${res.data[0].image}`
			})
		},
		hotList() {
			hotList(this.hotListParams).then(res => {
				res.data.forEach(item => {
					item.cooperate = item.cooperate == null ? null : `http://zxyj.xzxiaocaihua.cn${item.cooperate}`
				});
				this.hotListData = res.data
			})
		},
		list() {
			list(this.listParams).then(res => {
				if (res.code == -1) return this.$u.toast(res.msg)
				res.data.forEach(item => {
					item.cooperate = item.cooperate == null ? null : `http://zxyj.xzxiaocaihua.cn${item.cooperate}`
					this.dayList.push(item)
				});
			})
		},
		goVip() {
			uni.navigateTo({
				url: '/pages/user/vip'
			});
		},
		goHall() {
			uni.switchTab({
				url: '/pages/hall/index'
			});
		},
		goPromote() {
			uni.navigateTo({
				url: '/pages/user/promote'
			});
		},
	},
	onLoad() {
		this.bannerList()
		this.hotList()
		this.list()
	},
	onReachBottom() {
		this.listParams.page += 1
		this.list()
	},
	components: { TaskHot, TaskDay }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>