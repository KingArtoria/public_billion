<template>
  <view>

    <Head title="余额提现" />
    <view class="content">
      <view class="content_1">
        <image class="content_1_1" src="../../static/qiandai2.webp" />
        <view class="content_1_2">可提现余额(元)：</view>
        <view class="content_1_3">{{ price }}</view>
      </view>
      <view class="content_2">
        <view class="content_2_1" v-show="isZFB">
          <view class="content_2_1_1" />
          <view class="content_2_1_2">提现方式</view>
        </view>
        <view class="content_2_2" v-show="isWX">
          <view class="content_2_2_1">
            <image class="content_2_2_1_1" src="../../static/zhidfubao.webp" />
            <view class="content_2_2_1_2">支付宝</view>
          </view>
          <view class="content_2_2_1">
            <image class="content_2_2_1_1" src="../../static/weixin.webp" />
            <view class="content_2_2_1_2">微信</view>
          </view>
        </view>
        <view class="content_2_3" v-show="isZFB || isWX">
          <view class="content_2_3_1">{{ text }}：13645225773</view>
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
    <u-modal :show="!isZFB && !isWX" title="提示" content='请先去绑定提现支付宝账户或微信账户' showCancelButton @confirm="confirm"
      @close="cancel_close" @cancel="cancel_close" />
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { memberIndex } from '../../utils/api'
export default {
  data() {
    return {
      price: 0,
      userInfo: {},
      isZFB: false,
      isWX: false,
      text: ""
    }
  },
  methods: {
    memberIndex() {
      memberIndex().then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.userInfo = res.data.member
        if (this.userInfo.ali_number != '') this.isZFB = true
        if (this.userInfo.wx_number != '') this.isWX = true
        if (this.isZFB) {
          this.text = "支付宝账号"
        } else if (this.isWX) {
          this.text = "微信账号"
        }
      })
    },
    confirm() {
      uni.navigateTo({
        url: '/pages/user/edit_info'
      });
    },
    cancel_close() {
      uni.navigateBack();
    },
  },
  onLoad(option) {
    this.price = option.price
    this.memberIndex()
  },
  components: { Head },
}
</script>
<style lang="scss" scoped>
@import './withdraw.scss';
</style>