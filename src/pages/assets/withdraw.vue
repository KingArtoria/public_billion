<template>
  <view>

    <Head title="余额提现" />
    <view class="content">
      <view class="content_1">
        <image class="content_1_1" src="../../static/qiandai2.webp" />
        <view class="content_1_2">可提现余额(元)：</view>
        <view class="content_1_3">120.00</view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1" />
          <view class="content_2_1_2">提现方式</view>
        </view>
        <view class="content_2_2">
          <view class="content_2_2_1">
            <image class="content_2_2_1_1" src="../../static/zhidfubao.webp" />
            <view class="content_2_2_1_2">支付宝</view>
          </view>
          <view class="content_2_2_1">
            <image class="content_2_2_1_1" src="../../static/weixin.webp" />
            <view class="content_2_2_1_2">微信</view>
          </view>
        </view>
        <view class="content_2_3">
          <view class="content_2_3_1">支付宝账号：13645225773</view>
          <view class="content_2_3_2">修改</view>
        </view>
      </view>
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1" />
          <view class="content_3_1_2">提现金额</view>
        </view>
        <u--input placeholder="请输入内容" border="none" fontSize="26rpx" />
      </view>
      <view class="content_4">
        <view class="content_4_1">
          <view class="content_4_1_1" />
          <view class="content_4_1_2">提现金额</view>
        </view>
        <view class="content_4_2">1、提现金额次日到账。</view>
        <view class="content_4_2">2、提现说明文案这是一段文字，等后面写。</view>
      </view>
    </view>
    <view class="btn">
      <view class="btn_1">立即体现</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
export default {
  components: { Head }
}
</script>
<style lang="scss" scoped>
@import './withdraw.scss';
</style>