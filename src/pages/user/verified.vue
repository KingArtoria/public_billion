<template>
  <view>

    <Head title="实名认证" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">请输入身份信息</view>
        <view class="content_1_2">为营造诚信合作环境，保障合作信息真实有效，我们已接入阿里云实名认证服务；身份信息不会在APP中展示，我们将严格保护您的个人信息。</view>
      </view>
      <view class="content_2">
        <view class="content_2_1">真实姓名</view>
        <view class="content_2_2">
          <u--input placeholder="请输入您本人的真实姓名" border="none" fontSize="30rpx" />
        </view>
      </view>
      <view class="content_2">
        <view class="content_2_1">身份证号</view>
        <view class="content_2_2">
          <u--input placeholder="请输入您本人的身份证号码" border="none" fontSize="30rpx" />
        </view>
      </view>
      <view class="content_3">提交</view>
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
@import './verified.scss';
</style>