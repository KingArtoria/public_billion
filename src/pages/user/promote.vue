<template>
  <view>

    <Head title="邀请好友" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1" />
        </view>
        <view class="content_1_2" @click="copyUUID">
          <view class="content_1_2_1">邀请码：{{ uuid }}</view>
          <view class="content_1_2_2">（点击复制）</view>
        </view>
        <view class="content_1_3">
          <image class="content_1_3_1" src="../../static/jiandansb.webp" />
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
export default {
  data() {
    return {
      uuid: ""
    }
  },
  methods: {
    copyUUID() {
      uni.setClipboardData({
        data: this.uuid,
        success: () => {
          this.$u.toast("复制成功")
        }
      })
    },
  },
  onLoad(option) {
    this.uuid = option.uuid
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './promote.scss';
</style>