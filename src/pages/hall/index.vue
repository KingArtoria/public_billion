<template>
  <view>
    <view class="head">大厅</view>
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" @click="switchType(0)" :style="`color:${typeColor[0]}`">综合</view>
        <view class="content_1_1" @click="switchType(1)" :style="`color:${typeColor[1]}`">热门</view>
        <view class="content_1_1" @click="switchType(2)" :style="`color:${typeColor[2]}`">最新</view>
        <view class="content_1_1" @click="switchType(3)" :style="`color:${typeColor[3]}`">高价</view>
        <view class="content_1_1" @click="switchType(4)" :style="`color:${typeColor[4]}`">简单</view>
        <view class="content_1_1" @click="switchType(5)" :style="`color:${typeColor[5]}`">其他</view>
        <view class="content_1_2" :style="`left:${typeLeft}`" />
      </view>
      <view class="content_2">
        <Task_dayVue v-for="(item, index) in dayList" :key="index" :item="item" />
      </view>
    </view>
  </view>
</template>

<script>
import Task_dayVue from '../../components/Task_day.vue'
export default {
  data() {
    return {
      dayList: [
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "团油", tag: ['开卡', '邮寄到家'], price: "5.00", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] },
        { logo: "https://p3-passport.byteacctimg.com/img/user-avatar/bbb8b4e2c83c8f1f1a3706cd243deee0~300x300.image", title: "腾讯大王卡", tag: ['信用卡开卡'], price: "30.33", info: [3215, 119] }
      ],
      typeLeft: '',
      typeColor: ['#FF644D', '#424242', '#424242', '#424242', '#424242', '#424242'],
    }
  },
  methods: {
    switchType(index) {
      this.typeLeft = `calc(125rpx - 62.5rpx - 19.5rpx + 125rpx*${index})`
      this.typeColor = ['#424242', '#424242', '#424242', '#424242', '#424242', '#424242']
      this.typeColor[index] = '#FF644D'
    },
  },
  onLoad() {
    this.typeLeft = `calc(125rpx - 62.5rpx - 19.5rpx + 125rpx*0)`
  },
  components: { Task_dayVue }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>