<template>
  <view>

    <Head title="问题反馈" />
    <view class="content">
      <u--textarea placeholder="请输入内容" class="content_1" height="250rpx" />
      <view class="content_2">请提供相关问的的截图或照片</view>
      <view class="content_3">
        <view class="content_3_1" />
        <view class="content_3_1" />
        <view class="content_3_1" />
      </view>
      <view class="content_4">
        <view class="content_4_1">联系方式</view>
        <view class="content_4_2">
          <u--input placeholder="请输入手机号便于联系（非必填）" border="none" fontSize="24rpx" />
        </view>
      </view>
      <view class="content_5">提交</view>
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
@import './feedback.scss';
</style>