<template>
	<view>
		<!--播放音乐-->
		<view class="play_box" >
			<view class="play_back"></view>
			<view style="top:25px;position: absolute; left:25px;">
				<view class="play_disc">
					<img class="play_img" src="/static/c.jpg">
					<img class="play_point" src="/static/cd_tou.png"/>
				</view>
				
			</view>	
			<view class="play_controls">
				<view class="music_info">
					<view class="music_title">测试播放的名称</view>
					<view class="music_singer">1111</view>
				</view>
				<view class="play_control">
					
					<view class="play_control_content" >
						<view class="play_control_btn ">
							<img class="play_btn_img" src="/static/before.png" />
							<img class="play_btn_img" src="/static/play.png" />
							<img class="play_btn_img" src="/static/next.png" />
							<img class="play_btn_img" src="/static/rand.png" />
							<img class="play_btn_img play_btn_voice" src ="/static/voice.png" />
						</view>
					</view>	
				</view>
			</view>	
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
		margin: auto;
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
	.play_img{
		width: 60px;
		height: 60px;
		margin: 20px 20px;
		border-radius: 50%;
		position: relative;
	}
	.play_point{
		width: 25px;
		position: absolute;
		right: -20px;
		top: 0px;
		transform: rotate(-10deg);
	}
	.play_controls{
		
		width: 200px;
		height: 100px;
		position: absolute;
		margin: 25px 25px 25px ;
		top: 0px;
		right: 25px;
		
	}
	.music_info{
		width: 100%;
		height: 30px;
		margin-bottom: 10px;
		
		margin-left: 10px;
	}
	.music_info{
		
	}
	.music_title, .music_singer{
		color: #fff;
	}
	.music_title{
		font-size: 14px;
	}
	.music_singer{
		height: 20px;
		font-size: 12px;
		
	}
	.play_control{
		width: 100%;
	}
	.play_control_content{
		width: 100%;
		margin-bottom: 10px;
	}
	.play_control_btn{
		float: left;
		margin: 0 5px;
		
	}
	.play_btn_img{
		width: 16px;
		height: 16px;
		margin-left: 2px;
	}
	.play_btn_voice{
		margin-left: 50px;
		
	}
	.play_bar{
		
	}
	.progress{
		background: rgb(0,0,0,0.3);
		height: 5px;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5) inset;
		overflow: hidden;
		border-radius: 2px;
		cursor: pointer;
	}
</style>