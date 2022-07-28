<template>
  <view>

    <Head title="邀请好友" />
    <view class="content">
      <view class="content_1">
        <view class="content_1_1" v-if="uuid != '暂无权限'">
          <image class="content_1_1_1" :src="codeUrl" />
        </view>
        <view class="content_1_2">邀请码：{{ uuid }} </view>
      </view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { getCodePic, memberIndex } from '../../utils/api'
export default {
  data() {
    return {
      uuid: "",
      codeUrl: ""
    }
  },
  methods: {
    memberIndex() {
      memberIndex().then(res => {
        this.uuid = res.data.member.uuid == null ? "暂无权限" : res.data.member.uuid
        if (this.uuid != '暂无权限') {
          let url = `http://invite.xzxiaocaihua.cn?uuid=${this.uuid}`
          getCodePic({ url }).then(res => {
            this.codeUrl = res.data
          })
        }
      })
    },
  },
  onLoad() {
    this.memberIndex()
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './promote.scss';
</style>