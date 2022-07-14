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
        <Task_dayVue v-for="(item, index) in cooperateListData" :key="index" :item="item" />
      </view>
    </view>
  </view>
</template>

<script>
import Task_dayVue from '../../components/Task_day.vue'
import { cooperateList } from '../../utils/api'
export default {
  data() {
    return {
      typeLeft: '',
      typeColor: ['#FF644D', '#424242', '#424242', '#424242', '#424242', '#424242'],
      cooperateListParams: { page: 1, num: 10, type: 'all' },
      cooperateListData: [],
      typeListData: ['all', 'hot', 'new', 'price', 'easy', 'newuser'],
    }
  },
  methods: {
    switchType(index) {
      this.typeLeft = `calc(125rpx - 62.5rpx - 19.5rpx + 125rpx*${index})`
      this.typeColor = ['#424242', '#424242', '#424242', '#424242', '#424242', '#424242']
      this.typeColor[index] = '#FF644D'
      this.cooperateListParams.type = this.typeListData[index]
      this.cooperateList()
    },
    cooperateList() {
      cooperateList(this.cooperateListParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        res.data.forEach(item => {
          item.cooperate = item.cooperate == null ? null : `http://zxyj.xzxiaocaihua.cn${item.cooperate}`
        });
        this.cooperateListData = res.data
      })
    },
  },
  onLoad() {
    this.typeLeft = `calc(125rpx - 62.5rpx - 19.5rpx + 125rpx*0)`
    this.cooperateList()
  },
  components: { Task_dayVue }
}
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>