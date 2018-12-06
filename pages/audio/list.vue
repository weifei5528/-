<template>
	<view>
		<view class="box">
			<view>名称</view>
			<view>大小</view>
			<view>点击量</view>
			<view>操作</view>
		</view>
		<view v-for="(item ,index) in audioList" :key="index"  class="box"> 
			<view>{{item.name}}</view>
			<view>{{item.size}}</view>
			<view>{{item.click}}</view>
			
		</view>	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				audioList:[],
			};
		},onLoad(e) {
			this.id = e.id
			this.getList();
		},methods:{
			getList(){
				uni.request({
					url:this.$store.state.host+"/index/audio/getAudioList?id="+this.id,
					success: (data) => {
						this.audioList = data.data.data;
						console.log(this.audioList);
						
					},fail: () => {
						uni.showModal({
							title:"错误提示",
							content:"请检查网络是否连接~~~"
						})
					}
				})
			}
		}
	}
</script>

<style>
	.box{
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		
	}
	.nowap{
		
	}

</style>
