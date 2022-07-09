<template>
  <view>

    <Head title="设置" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">账号与安全</view>
          <image class="content_1_1_2" src="../../static/jiantou_tz.webp" />
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">地址管理</view>
          <image class="content_1_1_2" src="../../static/jiantou_tz.webp" />
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">关于我们</view>
          <image class="content_1_1_2" src="../../static/jiantou_tz.webp" />
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">退出登录</view>
          <image class="content_1_1_2" src="../../static/jiantou_tz.webp" />
        </view>
      </view>
    </view>
  </view>
</template>
<script>
import Head from '../../components/Head'
export default {
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './settings.scss';
</style>