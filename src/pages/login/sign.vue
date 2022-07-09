<template>
  <view>

    <Head />
    <view class="content">
      <view class="content_1">验证码登录</view>
      <view class="content_2">
        <u--input placeholder="请输入内容" border="surround" />
      </view>
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
@import './sign.scss';
</style>