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
          <view class="content_3_3" v-for="(item, index) in newContent" :key="index">
            <view class="content_3_3_1">
              <view class="content_3_3_1_1">{{ index + 1 }}</view>
              <view class="content_3_3_1_2">{{ item.text }}</view>
            </view>
            <view class="content_3_3_2">
              <image class="content_3_3_2_1" v-for="(item2, index2) in item.img" :key="index2" :src="item2"
                mode="widthFix" />
            </view>
          </view>
        </view>
      </view>
      <!-- <view class="content_4">
        <view class="content_4_1">
          <view class="content_4_1_1" />
          <view class="content_4_1_2">做单公码</view>
        </view>
        <view class="content_4_2" />
        <view class="content_4_3">团油拉新项目公码，请注意保存</view>
        <view class="content_4_4">注：因抖音口令规则改变口令有可能短暂失效，个别用户不自动跳转到任务的，复制口令到抖音搜索栏搜索。</view>
      </view> -->
    </view>
    <view class="btn">
      <view class="btn_1" @click="applyJob">领取任务</view>
    </view>
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
      newContent: [],
    }
  },
  methods: {
    applyJob() {
      applyJob({ id: this.item.id }).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.$u.toast('领取成功')
      })
    }
  },
  onLoad() {
    this.item = uni.getStorageSync('item')
    let newContent = []
    let index = 0
    // 判断item.content数据类型是否为数组或者字符串
    if (this.item.content instanceof Array) {
      this.type = "new"
      this.item.content.forEach(item2 => {
        if (item2[0].substring(0, 4) == 'text') {
          index = item2[0].substring(4, 5)
          newContent[index - 1] = { text: item2[1] }
        } else {
          newContent[index - 1].img = []
          newContent[index - 1].img.push(item2[1])
        }
      });
      this.newContent = newContent
      console.log(this.newContent)
    } else {
      this.type = 'old'
      this.item.content = this.item.content.replace(/src=\"/g, 'src=\"http://zxyj.xzxiaocaihua.cn')
      this.item.content = this.item.content.replace(/img/g, 'img style="width:90%""')
    }
  },
  components: { Head }
}
</script>
<style lang="scss" scoped>
@import './info.scss';
</style>