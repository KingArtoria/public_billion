<template>
  <view>
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">资产</view>
        <view class="content_1_2">任务总收益(元)</view>
        <view class="content_1_3">120.00</view>
        <view class="content_1_4">
          <view class="content_1_4_1">
            <view class="content_1_4_1_1">当前积分</view>
            <view class="content_1_4_1_2">820.00</view>
          </view>
          <view class="content_1_4_1">
            <view class="content_1_4_1_1">当前金币</view>
            <view class="content_1_4_1_2">1100</view>
          </view>
          <view class="content_1_4_1">
            <view class="content_1_4_1_1">冻结余额(元)</view>
            <view class="content_1_4_1_2">1800</view>
          </view>
        </view>
        <view class="content_1_5">兑换</view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <image class="content_2_1_1" src="../../static/qiandai2.webp" />
          <view class="content_2_1_2">可提现余额(元)：</view>
          <view class="content_2_1_3">120.00</view>
        </view>
        <view class="content_2_2">提现</view>
      </view>
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1">积分明细</view>
          <view class="content_3_1_1">任务奖励明细</view>
          <view class="content_3_1_1">金币明细</view>
          <view class="content_3_1_2" :style="`left:${typeLeft}`" />
        </view>
        <view class="content_3_2">
          <view class="content_3_2_1">
            <view class="content_3_2_1_1">
              <view class="content_3_2_1_1_1">邀请一位好友</view>
              <view class="content_3_2_1_1_2">+10</view>
            </view>
            <view class="content_3_2_1_2">2022-07-04 09:22:45</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      typeLeft: ""
    }
  },
  onLoad() {
    this.typeLeft = '100.5rpx'
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>