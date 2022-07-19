<template>
  <view>

    <Head title="注册协议" />
    <view class="content">
      <view class="content_1" v-html="text" />
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
export default {
  data() {
    return {
      text: '﻿注册协议 【重要提示】用户在点击同意本协议之前，应当认真阅读本协议。请用户务必审慎阅读、充分理解各条款内容（条款标题仅为检索定位之用，不视为对条款主旨的任何概括或限制），特别是免除或者限制责任的条款、法律适用和争议解决条款及其他以粗体下划线标示的条款。如有疑问，可向平台客服咨询。'
    }
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
.content {
  padding: 0 25rpx;
  padding-top: 195rpx;
  font-size: 40rpx;
}
</style>