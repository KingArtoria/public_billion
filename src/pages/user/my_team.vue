<template>
  <view>

    <Head title="我的团队" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <view class="content_1_1_1">{{ pushNum }}</view>
          <view class="content_1_1_2">直推人数</view>
        </view>
        <view class="content_1_1">
          <view class="content_1_1_1">{{ teamNum }}</view>
          <view class="content_1_1_2">团队人数</view>
        </view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1" />
          <view class="content_2_1_2">我的直推</view>
        </view>
        <view class="content_2_2">
          <view class="content_2_2_1" v-for="(item, index) in teamList" :key="index">
            <view class="content_2_2_1_1">
              <view class="content_2_2_1_1_1">{{ item.nick_name }}</view>
              <view class="content_2_2_1_1_1">{{ item.phone }}</view>
            </view>
            <view class="content_2_2_1_2">{{ item.create_time }}</view>
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
      teamNum: "",
      pushNum: ""
    }
  },
  methods: {
    team() {
      team().then(res => {
        this.teamList = res.data.list
        this.teamNum = res.data.team_num
        this.pushNum = res.data.push_num
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