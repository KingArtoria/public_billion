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
        <view class="content_3_2" v-html="item.content" />
      </view>
      <view class="content_4">
        <view class="content_4_1" style="font-size:20rpx">提交数据</view>
        <u--input placeholder="选填,请输入凭证" border="surround" v-model="commitJobParams.voucher" fontSize="20rpx" />
        <u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple :maxCount="9"
          style="margin-top:20rpx" />
      </view>
    </view>
    <view class="btn">
      <view class="btn_1" @click="commitJob">提交任务</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { commitJob } from '../../utils/api'
export default {
  data() {
    return {
      item: {},
      fileList1: [],
      commitJobParams: { images: [] },
    }
  },
  methods: {
    async afterRead(event) {
      // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
      let lists = [].concat(event.file)
      let fileListLen = this[`fileList${event.name}`].length
      lists.map((item) => {
        this[`fileList${event.name}`].push({
          ...item,
          status: 'uploading',
          message: '上传中'
        })
      })
      for (let i = 0; i < lists.length; i++) {
        const result = await this.uploadFilePromise(lists[i].url)
        let item = this[`fileList${event.name}`][fileListLen]
        this[`fileList${event.name}`].splice(fileListLen, 1, Object.assign(item, {
          status: 'success',
          message: '',
          url: result
        }))
        fileListLen++
      }
    },
    uploadFilePromise(url) {
      return new Promise((resolve, reject) => {
        let a = uni.uploadFile({
          url: 'http://zxyj.xzxiaocaihua.cn/api/Upload/upload',
          filePath: url,
          name: 'file',
          header: { token: uni.getStorageSync('token') },
          success: (res) => {
            resolve(JSON.parse(res.data).data)
          }
        });
      })
    },
    deletePic(event) {
      this[`fileList${event.name}`].splice(event.index, 1)
    },
    commitJob() {
      this.fileList1.forEach(item => {
        this.commitJobParams.images.push(`/${item.url}`)
      });
      this.commitJobParams.images = this.commitJobParams.images.join(',')
      commitJob(this.commitJobParams).then(res => {
        if (res.code == -1) return this.$u.toast(res.msg)
        this.$u.toast('提交成功,请等待审核')
        this.commitJobParams.images = []
      })
    },
  },
  onLoad() {
    this.item = uni.getStorageSync('item')
    // 查询item.content中src=\"替换为src=\"http://zxyj.xzxiaocaihua.cn
    this.item.content = this.item.content.replace(/src=\"/g, 'src=\"http://zxyj.xzxiaocaihua.cn')
    // 查询item.content中img替换为img style="width:90%""
    this.item.content = this.item.content.replace(/img/g, 'img style="width:90%"')
    this.commitJobParams.id = this.item.user_job_id
  },
  components: { Head }
}
</script>
<style lang="scss" scoped>
@import './submit.scss';
</style>