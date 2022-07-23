<template>
  <view>

    <Head title="任务详情" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1">
          <image class="content_1_1_1" :src="item.cooperate" />
          <view class="content_1_1_2">
            <view class="content_1_1_2_1">{{ item.name }}</view>
            <view class="content_1_1_2_2">
              <view class="content_1_1_2_2_1">{{ item.category }}</view>
            </view>
          </view>
        </view>
        <view class="content_1_2">编号：{{ item.order_num }}</view>
      </view>
      <view class="content_2">
        <view class="content_2_1">
          <view class="content_2_1_1">{{ item.stock_number }}</view>
          <view class="content_2_1_2">剩余数量</view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">{{ item.number - item.stock_number }}</view>
          <view class="content_2_1_2">完成数量</view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_1">{{ item.examine == null ? '未知' : item.examine }}</view>
          <view class="content_2_1_2">审核时间</view>
        </view>
        <view class="content_2_1">
          <view class="content_2_1_3">￥{{ item.award_number }}</view>
          <view class="content_2_1_2">做单价格</view>
        </view>
      </view>
      <view class="content_3">
        <view class="content_3_1">
          <view class="content_3_1_1" />
          <view class="content_3_1_2">任务步骤</view>
          <view class="content_3_1_3">(请参考以下做单流程做单)</view>
        </view>
        <view class="content_3_2" v-html="item.content" v-if="type == 'old'" />
        <view class="content_3_3" v-else>
          <view class="content_3_3" v-for="(item2, index) in item.content" :key="index">
            <view class="content_3_3_1" v-if="item2.text != ''">
              <view class="content_3_3_1_1">{{ index + 1 }}</view>
              <view class="content_3_3_1_2" :style="`color:${item2.isColor ? 'red' : '#1a1a1a'}`">{{ item2.text }}
              </view>
            </view>
            <view class="content_3_3_2">
              <image class="content_3_3_2_1" :src="item2.pic" mode="widthFix" v-if="item2.pic != ''"
                @click="showImage(item2.pic)" />
              <view class="content_3_3_2_2" v-if="item2.video != ''" @click="showVideo(item2.video)">点击播放视频</view>
            </view>
          </view>
        </view>
      </view>
      <view class="content_4" v-if="item.share_url">
        <view class="content_4_1">
          <view class="content_4_1_1" />
          <view class="content_4_1_2">做单公码</view>
        </view>
        <image class="content_4_2" :src="item.share_url" />
        <!-- <view class="content_4_2" /> -->
      </view>
    </view>
    <view class="btn">
      <view class="btn_1" @click="applyJob">领取任务</view>
    </view>
    <u-modal :show="isApplyJob" title="系统提示" content='领取成功' @confirm="_pageBack" />
    <u-overlay :show="isShowImage" @click="isShowImage = false">
      <image class="image_1_1" :src="showPic" mode="widthFix" style="width:100%" />
    </u-overlay>
    <u-overlay :show="isShowVideo" @click="isShowVideo = false">
      <video :src="videoPic" style="width:375rpx;height:50%" class="showVideo" />
    </u-overlay>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { applyJob } from '../../utils/api'
export default {
  data() {
    return {
      item: {},
      type: "",
      isApplyJob: false,
      isShowImage: false,
      showPic: '',
      isShowVideo: false,
      videoPic: ""
    }
  },
  methods: {
    applyJob() {
      applyJob({ id: this.item.id }).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.isApplyJob = true
      })
    },
    showImage(pic) {
      this.isShowImage = true
      this.showPic = pic
    },
    showVideo(pic) {
      this.isShowVideo = true
      this.videoPic = pic
    }
  },
  onLoad() {
    this.item = uni.getStorageSync('item')
    if (this.item.check != null)
      this.item.check.forEach(element => {
        this.item.content[element - 1].isColor = true
      });
    console.log(this.item)
    if (typeof (this.item.content) == 'string') {
      this.type = 'old'
      this.item.content = String(this.item.content).replace(/src=\"/g, 'src=\"http://zxyj.xzxiaocaihua.cn')
      this.item.content = String(this.item.content).replace(/img/g, 'img style="width:90%""')
    }
  },
  components: { Head }
}
</script>
<style lang="scss" scoped>
@import './info.scss';
</style>