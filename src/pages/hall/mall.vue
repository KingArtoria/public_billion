<template>
  <view>
    <view class="content">
      <view class="content_1">
        <image class="content_1_1" src="../../static/jinbi.webp" />
        <view class="content_1_2">30000</view>
        <image class="content_1_3" src="../../static/duihua.webp" />
      </view>
      <!-- <view class="content_2">广告占位符</view> -->
      <view class="ad-view">
        <ad adpid="1393405528"></ad>
        <ad adpid="1731518890"></ad>
      </view>
      <view class="content_3">5x10=?</view>
      <view class="content_4">
        <view class="content_4_1">60S</view>
        <view class="content_4_2">
          <view class="content_4_2_1">15</view>
          <image class="content_4_2_2" src="../../static/cuowu.webp" />
        </view>
        <view class="content_4_2">
          <view class="content_4_2_1">15</view>
          <image class="content_4_2_2" src="../../static/cuowu.webp" />
        </view>
        <view class="content_4_2">
          <view class="content_4_2_1">15</view>
          <image class="content_4_2_3" src="../../static/zhengque.webp" />
        </view>
      </view>
      <ad adpid="1948948831"></ad>
      <ad adpid="1355633118"></ad>
    </view>
    <ad-interstitial :adpid="['1623978309','1799825346']"></ad-interstitial>
    <ad-rewarded-video :adpid="adpid" :loadnext="true" v-slot:default="{ loading, error }" @error="onerror">
      <button :disabled="loading" :loading="loading">显示广告</button>
      <view v-if="error">{{ error }}</view>
    </ad-rewarded-video>
  </view>
</template>

<script>
import Head from '../../components/Head.vue';
export default {
  data() {
    return {
      loading: '',
      error: '',
      adpid: ['1788815833', '1426942789', '1969922049', '1925559074', '1598298688', '1112353647', '1260591683', '1841934654'],
    };
  },
  methods: {
    onerror(e) {
      console.log('onerror: ' + e.detail.errCode + ' message:: ' + e.detail.errMsg);
    },
  },
  components: { Head },
};
</script>

<style lang="scss" scoped>
@import './mall.scss';
</style>
