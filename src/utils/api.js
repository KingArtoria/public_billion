import request from './request'
import qs from 'qs'
// ? 注册
export const register = data => {
	return request({
		url: "/login/register",
		method: "POST",
		data
	})
}
// ? 获取验证码
export const sms = data => {
	return request({
		url: "/AlibabaSms/sms",
		method: "POST",
		data
	})
}
// ? 密码登录
export const login = data => {
	return request({
		url: "/login/login",
		method: "POST",
		data,
	})
}
// ? 短信登录
export const SmsLogin = data => {
	return request({
		url: "/login/SmsLogin",
		method: "POST",
		data
	})
}
// ? 忘记密码
export const forgetPass = data => {
	return request({
		url: "/login/forget_pass",
		method: "POST",
		data
	})
}
// ? banner列表
export const bannerList = data => {
	return request({
		url: "/Index/bannerList",
		method: "POST",
		data
	})
}
// ? 热门列表
export const hotList = data => {
	return request({
		url: "/Index/hotList",
		method: "POST",
		data
	})
}
// ? 日常任务
export const list = data => {
	return request({
		url: "/Index/list",
		method: "POST",
		data
	})
}
// ? 领取任务
export const applyJob = data => {
	return request({
		url: "/Cooperate/applyJob",
		method: "POST",
		data
	})
}
// ? 列表
export const cooperateList = data => {
	return request({
		url: "/Cooperate/list",
		method: "POST",
		data
	})
}
// ? 分类列表
export const typeList = data => {
	return request({
		url: "/Cooperate/typeList",
		method: "POST",
		data
	})
}
// ? 资产
export const assetsIndex = data => {
	return request({
		url: "/Assets/index",
		method: "POST",
		data
	})
}
// ? 兑换
export const convert = data => {
	return request({
		url: "/member/convert",
		method: "POST",
		data
	})
}
// ? 个人中心
export const memberIndex = data => {
	return request({
		url: "/Member/index",
		method: "POST",
		data
	})
}
// ? 修改信息
export const editMember = data => {
	return request({
		url: "/member/edit_member",
		method: "POST",
		data
	})
}
// ? 绑定微信提现
export const wxCommit = data => {
	return request({
		url: "/member/wxCommit",
		method: "POST",
		data
	})
}
// ? 绑定支付宝提现
export const aliCommit = data => {
	return request({
		url: "/member/aliCommit",
		method: "POST",
		data
	})
}
// ? 提现
export const draw = data => {
	return request({
		url: "/Assets/draw",
		method: "POST",
		data
	})
}
// ? 我的任务
export const userJob = data => {
	return request({
		url: "/Member/user_job",
		method: "POST",
		data
	})
}
// ? 任务提交
export const commitJob = data => {
	return request({
		url: "/Member/commit_job",
		method: "POST",
		data
	})
}
// ? 我的团队
export const team = data => {
	return request({
		url: "/Member/team",
		method: "POST",
		data
	})
}
// ? 实名认证
export const auth = data => {
	return request({
		url: "/Member/auth",
		method: "POST",
		data
	})
}
// ? 问题反馈
export const problem = data => {
	return request({
		url: "/Member/problem",
		method: "POST",
		data
	})
}
// ? 微信支付
export const wxpay = () => {
	return request({
		url: "/wxpay/index",
		method: "POST",
	})
}
// ? 消息
export const notice = () => {
	return request({
		url: "/notice/notice",
		method: "POST",
	})
}
// ? 版本信息
export const version = () => {
	return request({
		url: "/Version/version",
		method: "POST",
	})
}
// ? 排行榜
export const ranking = () => {
	return request({
		url: "/member/ranking",
		method: "POST",
	})
}
// ? 弹框内容
export const get_tip = () => {
	return request({
		url: "/Version/get_tip",
		method: "POST",
	})
}
// ? 关于我们
export const get_wenan = () => {
	return request({
		url: "/Version/get_wenan",
		method: "POST",
	})
}
// ? 会员价格
export const order_price = () => {
	return request({
		url: "/Wxpay/order_price",
		method: "POST",
	})
}
// ? 生成二维码
export const getCodePic = (data) => {
	return request({
		url: "/Version/get_code_pic",
		method: "POST",
		data
	})
}
// ? 提现记录
export const drawRecord = () => {
	return request({
		url: "/assets/draw_record",
		method: "POST"
	})
}
// ? 我的钱包
export const users_wallet = () => {
	return request({
		url: "/Job/users_wallet",
		method: "POST"
	})
}
// ? 商家入驻
export const business = () => {
	return request({
		url: "/job/business",
		method: "POST"
	})
}
// ? 我的悬赏
export const users_release = () => {
	return request({
		url: "/Job/users_release",
		method: "POST"
	})
}
// ? 创建悬赏
export const release_job = data => {
	return request({
		url: "/Job/release_job",
		method: "POST",
		data
	})
}
// ? 创建悬赏
export const get_job_category = () => {
	return request({
		url: "/Job/get_job_category",
		method: "POST"
	})
}
// ? 存储任务图标
export const set_cooperate = data => {
	return request({
		url: "/Job/set_cooperate",
		method: "POST",
		data
	})
}
// ? 终止任务
export const job_end = data => {
	return request({
		url: "/Job/job_end",
		method: "POST",
		data
	})
}
// ? 悬赏列表
export const job_list = data => {
	return request({
		url: "/Job/job_list",
		method: "POST",
		data
	})
}
// ? 审核列表
export const users_examine = data => {
	return request({
		url: "/Job/users_examine",
		method: "POST",
		data
	})
}
// ? 拒绝
export const refuse = data => {
	return request({
		url: "/Job/refuse",
		method: "POST",
		data
	})
}
// ? 通过
export const agree = data => {
	return request({
		url: "/Job/agree",
		method: "POST",
		data
	})
}
// ? 绑定微信
export const wxOpenid = data => {
	return request({
		url: "/member/wxOpenid",
		method: "POST",
		data
	})
}