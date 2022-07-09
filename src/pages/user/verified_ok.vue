<template>
  <view>

    <Head title="实名认证" />
    <view class="content">
      <image class="content_1" src="../../static/wanchen.webp" />
      <view class="content_2">您已通过实名认证</view>
      <view class="content_3">
        <view class="content_3_1">真实姓名</view>
        <view class="content_3_1">李*</view>
      </view>
      <view class="content_3">
        <view class="content_3_1">身份证号</view>
        <view class="content_3_1">320305********0303</view>
      </view>
      <view class="content_4">实名认证服务由阿里云提供</view>
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
@import './verified_ok.scss';
</style>