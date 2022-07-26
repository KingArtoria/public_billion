<script>
import Vue from 'vue'
export default {
	onLaunch: function () {
		Vue.prototype._version = "2.3.0"
	},
}
</script>

<style lang="scss">
@import 'uview-ui/index.scss';
/*每个页面公共css */

/* 覆盖uni-app默认样式 */
.uni-tabbar .uni-tabbar-border {
	background: #ECECEC !important;
}
.uni-tabbar {
	height: 128rpx;
}
</style>
