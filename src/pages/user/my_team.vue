<template>
  <view>

    <Head title="我的团队" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">24</view>
          <view class="content_1_1_2">直推人数</view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">24</view>
          <view class="content_1_1_2">团队人数</view>
        </view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1" />
          <view class="content_2_1_2">我的直推</view>
        </view>
        <view class="content_2_2">
          <view class="content_2_2_1">
            <view class="content_2_2_1_1">
              <view class="content_2_2_1_1_1">我与神明画押</view>
              <view class="content_2_2_1_1_1">1345225778</view>
            </view>
            <view class="content_2_2_1_2">2022-07-04 09:22:45</view>
          </view>
          <view class="content_2_2_1">
            <view class="content_2_2_1_1">
              <view class="content_2_2_1_1_1">我与神明画押</view>
              <view class="content_2_2_1_1_1">1345225778</view>
            </view>
            <view class="content_2_2_1_2">2022-07-04 09:22:45</view>
          </view>
          <view class="content_2_2_1">
            <view class="content_2_2_1_1">
              <view class="content_2_2_1_1_1">我与神明画押</view>
              <view class="content_2_2_1_1_1">1345225778</view>
            </view>
            <view class="content_2_2_1_2">2022-07-04 09:22:45</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { team } from '../../utils/api'
export default {
  data() {
    return {
      teamList: [],
      teamNum: ""
    }
  },
  methods: {
    team() {
      team().then(res => {
        this.teamList = res.data.list
        this.teamNum = res.data.team_num
      })
    },
  },
  onLoad() {
    this.team()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './my_team.scss';
</style>