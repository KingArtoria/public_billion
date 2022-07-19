<template>
  <view>

    <Head title="我的任务" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" :style="`color:${item.color}`" v-for="(item, index) in typeData" :key="index"
          @click="switchType(index)">{{ item.text }}</view>
        <view class="content_1_2" :style="`left:${typeLeft}`" />
      </view>
      <view class="content_2">
        <view class="content_2_1" v-for="(item, index) in list" :key="index" @click="goInfo(item)">
          <view class="content_2_1_inner">
            <view class="content_2_1_1">
              <image class="content_2_1_1_1" :src="item.cooperate" />
              <view class="content_2_1_1_2">
                <view class="content_2_1_1_2_1">{{ item.name }}</view>
                <view class="content_2_1_1_2_2">
                  <view class="content_2_1_1_2_2_1">{{ item.category }}</view>
                </view>
                <view class="content_2_1_1_2_3">开始时间：{{ item.create_time }}</view>
              </view>
            </view>
            <view class="content_2_1_2">
              <view class="content_2_1_2_1">￥{{ item.award_number }}</view>
              <view class="content_2_1_2_2">
                <view class="content_2_1_2_2_1">
                  <image class="content_2_1_2_2_1_1" src="../../static/ren.webp" />
                  <view class="content_2_1_2_2_1_2">{{ item.number - item.stock_number }}人已赚 </view>
                </view>
                <view class="content_2_1_2_2_1">
                  <image class="content_2_1_2_2_1_1" src="../../static/qiandai.webp" />
                  <view class="content_2_1_2_2_1_2">剩余{{ item.stock_number }}个 </view>
                </view>
              </view>
              <view class="content_2_1_2_3">
                <view class="content_2_1_2_3_2" v-if="item.status == 1" @click.stop="goSubmit(item)">提交</view>
                <view class="content_2_1_2_3_3" v-if="item.status == 2">审核中</view>
                <view class="content_2_1_2_3_2" v-if="item.status == 3">已通过</view>
                <view class="content_2_1_2_3_4" v-if="item.status == 4">未通过</view>
              </view>
            </view>
          </view>
          <view v-if="item.status == 4" class="content_2_1_1_2_4">
            <view>未通过原因：</view>
            <view>{{ item.remark }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head'
import { userJob } from '../../utils/api'
export default {
  data() {
    return {
      list: [],
      userJobParams: { page: 1, num: 99999 },
      typeData: [
        { color: "#FF644D", text: "全部任务" },
        { color: "#424242", text: "待提交" },
        { color: "#424242", text: "审核中" },
        { color: "#424242", text: "已通过" },
        { color: "#424242", text: "未通过" },
      ],
      typeLeft: "52rpx",
    }
  },
  methods: {
    userJob() {
      userJob(this.userJobParams).then(res => {
        res.data.list.forEach(item => {
          item.cooperate = `http://zxyj.xzxiaocaihua.cn${item.cooperate}`
          // item.create_time改为YYYY-MM-dd格式
          item.create_time = String(item.create_time).split(" ")[0]
        });
        this.list = res.data.list
      })
    },
    switchType(index) {
      this.typeData.forEach(item => item.color = "#424242");
      this.typeData[index].color = "#FF644D"
      this.userJobParams.status = index
      this.userJob()
      switch (index) {
        case 0:
          this.typeLeft = '52rpx'
          break;
        case 1:
          this.typeLeft = '206rpx'
          break;
        case 2:
          this.typeLeft = '356rpx'
          break;
        case 3:
          this.typeLeft = '506rpx'
          break;
        case 4:
          this.typeLeft = '656rpx'
          break;
      }
    },
    goInfo(item) {
      uni.setStorageSync('item', item)
      uni.navigateTo({
        url: '/pages/index/info'
      });
    },
    goSubmit(item) {
      uni.setStorageSync('item', item)
      uni.navigateTo({
        url: '/pages/user/submit'
      });
    },
  },
  onLoad() {
    this.userJob()
  },
  onShow() {
    // 刷新数据
    this.userJob()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './my_task.scss';
</style>