<template>
	<view>
		<!--播放音乐-->
		<view class="play_box" >
			<view class="play_back"></view>
			
			
			<view>
			</view>	
			
			
		</view>	
		<view>
			<view class="box">
				<view class="box_item box_top_color">名称</view>
				<view class="box_item box_top_color">大小</view>
				<view class="box_item box_top_color">点击量</view>
				<view class="box_item box_top_color">操作</view>
			</view>
			<view v-for="(item ,index) in audioList" :key="index"  class="box"> 
				<view class="box_item">{{item.name}}</view>
				<view class="box_item">{{item.size}}</view>
				<view class="box_item">{{item.click}}</view>
				<view class="box_item"><img src ="../../static/play.png"/></view>
			</view>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:0,
				audioList:[],
				title:""
			};
		},onLoad(e) {
			uni.setNavigationBarTitle({
				title:"详情"
			});
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
	.box_item{
		line-height: 30px;
		display: flex;
		justify-content: center;
		width: 20%;
		border: #8F8F94 1px solid;
		font-size: 12px;
		align-items: center;
	}
	.box_item > img{
		
		width: 15px;
		height: 15px;
	}
	.box_top_color{
		background-color: #E0E0E0;
	}
	.play_box{
		height: 100px;
		width: 350px;
		padding: 25px;
		overflow: hidden;
		position: relative;
	}
	.play_back{
		background-image: url('/static/c.jpg');
		background-repeat: no-repeat;
		background-position: center;
		filter: blur(30px);
		border-radius: 10px;
		position: relative;
		background-size: 100%;
		width: 100%;
		height: 100%;
	}
	.play_disc{
		float: left;
		width: 100px;
		height: 100px;
		position: relative;
		background-image: url('/static/cd.png');
		background-size: 100%;
		top: 0px;
		
	}

</style>