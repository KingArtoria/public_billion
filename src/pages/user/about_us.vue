<template>
  <view>

    <Head title="关于我们" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" v-for="(item, index) in tipData" :key="index">{{ index + 1 }}.{{ item }}</view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head'
import { get_wenan } from '../../utils/api'
export default {
  data() {
    return {
      tipData: [],
    }
  },
  methods: {
    get_wenan() {
      get_wenan().then(res => {
        this.tipData = res.data
      })
    },
  },
  onLoad() {
    this.get_wenan()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './about_us.scss';
</style>