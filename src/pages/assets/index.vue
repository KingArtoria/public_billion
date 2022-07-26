<template>
  <view>
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">资产</view>
        <view class="content_1_2">总收益(元)</view>
        <view class="content_1_3">{{ assetsIndexData.all_profit }}</view>
        <view class="content_1_4">
          <view class="content_1_4_1">
            <view class="content_1_4_1_1">当前积分</view>
            <view class="content_1_4_1_2">{{ assetsIndexData.integral }}</view>
          </view>
          <!-- <view class="content_1_4_1">
            <view class="content_1_4_1_1">当前金币</view>
            <view class="content_1_4_1_2">{{ assetsIndexData.coin }}</view>
          </view> -->
          <view class="content_1_4_1">
            <view class="content_1_4_1_1">任务总收益</view>
            <view class="content_1_4_1_2">{{ assetsIndexData.all_balance }}</view>
          </view>
          <view class="content_1_4_1">
            <view class="content_1_4_1_1">累计提现</view>
            <view class="content_1_4_1_2">{{ assetsIndexData.all_draw }}</view>
          </view>
        </view>
        <view class="content_1_5" @click="convert">兑换</view>
        <view class="content_1_6">兑换比例：1:10000</view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <image class="content_2_1_1" src="../../static/qiandai2.webp" />
          <view class="content_2_1_2">可提现余额(元)：</view>
          <view class="content_2_1_3">{{ assetsIndexData.balance }}</view>
        </view>
        <view class="content_2_2" @click="goWithdraw">提现</view>
      </view>
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1" @click="switchType(0)">积分明细</view>
          <view class="content_3_1_1" @click="switchType(1)">任务奖励明细</view>
          <view class="content_3_1_1" @click="switchType(2)">金币明细</view>
          <view class="content_3_1_2" :style="`left:${typeLeft}`" />
        </view>
        <view class="content_3_2">
          <view class="content_3_2_1" v-for="(item, index) in detailData" :key="index">
            <view class="content_3_2_1_1">
              <view class="content_3_2_1_1_1">{{ item.bill_type }}</view>
              <view class="content_3_2_1_1_2" v-if="item.type == 1">+{{ item.account }}</view>
              <view class="content_3_2_1_1_2" v-else>-{{ item.account }}</view>
            </view>
            <view class="content_3_2_1_2">{{ item.create_time }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { assetsIndex, convert } from '../../utils/api'
export default {
  data() {
    return {
      typeLeft: "",
      assetsIndexData: [],
      detailData: [],
    }
  },
  methods: {
    assetsIndex() {
      assetsIndex().then(res => {
        this.assetsIndexData = res.data
        this.detailData = res.data.list.bill_list
        this.$forceUpdate()
      })
    },
    switchType(index) {
      switch (index) {
        case 0:
          this.typeLeft = '100.5rpx'
          this.detailData = this.assetsIndexData.list.bill_list
          break;
        case 1:
          this.typeLeft = '354rpx'
          this.detailData = this.assetsIndexData.list.job_list
          break;
        case 2:
          this.typeLeft = '606rpx'
          this.detailData = this.assetsIndexData.list.coin_list
          break;
      }
    },
    convert() {
      let integral = this.assetsIndexData.integral
      let coin = this.assetsIndexData.coin
      let params1 = { account: integral, convert_id: 1 }
      let params2 = { account: coin, convert_id: 2 }
      if (integral > 0)
        convert(params1).then(res => {
          if (res.code == -1) return this.$u.toast(res.msg)
          this.$u.toast('兑换成功')
          this.assetsIndex()
        })
      if (coin > 0)
        convert(params2).then(res => {
          if (res.code == -1) return this.$u.toast(res.msg)
          this.$u.toast('兑换成功')
          this.assetsIndex()
        })
    },
    goWithdraw() {
      uni.navigateTo({
        url: `/pages/assets/withdraw?price=${this.assetsIndexData.balance}`
      });
    },
  },
  onShow() {
    this.typeLeft = '100.5rpx'
    this.assetsIndex()
  },
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>