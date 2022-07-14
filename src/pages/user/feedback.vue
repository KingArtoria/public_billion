<template>
  <view>

    <Head title="问题反馈" />
    <view class="content">
      <u--textarea placeholder="请输入内容" class="content_1" height="250rpx" v-model="problemParams.content"
        confirmType="done" />
      <view class="content_2">请提供相关问的的截图或照片</view>
      <view class="content_3">
        <u-upload :fileList="fileList1" @afterRead="afterRead" @delete="deletePic" name="1" multiple :maxCount="9"
          style="margin-top:20rpx" />
      </view>
      <view class="content_4">
        <view class="content_4_1">联系方式</view>
        <view class="content_4_2">
          <u--input placeholder="请输入手机号便于联系（非必填）" border="none" fontSize="24rpx" v-model="problemParams.phone" />
        </view>
      </view>
      <view class="content_5">提交</view>
    </view>
  </view>
</template>

<script>
import Head from '../../components/Head.vue'
import { problem } from '../../utils/api'
export default {
  data() {
    return {
      problemParams: {},
      fileList1: [],
    }
  },
  methods: {
    problem() {
      problem(this.problemParams).then(res => { })
    },
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
  },
  components: { Head }
}
</script>

<style lang="scss" scoped>
@import './feedback.scss';
</style>