<template>
 <div class="app-container">
    <!--1.云游顶部导航栏-->
	<div class="body_top">
       <div class="body_top_up">
		   <div class="body_top_tit1">
			   <a href="#">
				   <img src="./img/logo.png"/>
			   </a>
		   </div>
		   <div class="index_search">
               <a href="#" style="display:flex;">
				   <input class="index_input_btn" type="button">
				   <input class="index_input_tx" type="text" placeholder="十一泰国游">
			   </a>
		   </div>
		   <div class="body_top_right1">
			   <span>杭州</span>
		   </div>
	   </div>
	</div>
    <!--2.router-view-->
    <router-view></router-view>
    <!--2.tabber-->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" to="/Index">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Find">
				<span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
				<span class="mui-tab-label">发现</span>
			</router-link>
			<router-link class="mui-tab-item" to="/Cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
				<span class="mui-tab-label">订单</span>
			</router-link> 
			<router-link class="mui-tab-item" to="/Myself">
				<span class="mui-icon mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">个人</span>
			</router-link>    
		</nav>  
 </div>
</template>

<style>
   .app-container{
     padding-top:40px;
     padding-bottom:50px;
     overflow-x:hidden;
   }
    /*导航栏*/
   .body_top{
	   position: fixed;
	   top:0;
	   width: 100%;
	   z-index: 999999;
    }
    .body_top_up{
		background-color: #fafafa;
		margin:auto;
		overflow: hidden;
		position: relative;
		padding: 10px 15px;
		z-index: 2;
	}
	.body_top_tit1{
		text-align: center;
		position: absolute;
		padding-left: 15px;
		height: 100%;
		top: 0;
		left: 0;
	}
	.body_top_tit1 a{
		font-size: 18px;
		display: block;
		line-height: 42px;
		color: #222;
	}
    .body_top_tit1 img{
		width: 52px;
		margin-top: 7px;
	}
	.index_search{
		background-color: #eeeeed;
		margin-left: 95px;
		margin-right: 80px;
		border-radius: 5px;
		margin-top: -1px;
		position: relative;
	}
	.index_input_tx {
		line-height: 30px;
		height:24px !important;
		background-color: transparent;
		padding:0 !important;
		margin:0 !important;
		font-size: 14px;
		border-left:0 !important;
		color: #666;
		width: 100%;
		border-radius:3px !important;
	}
	.index_input_btn {
		position: absolute;
		left: 0px;
		top: 0px; 
		background-image: url(./img/icon-wy.png);
		background-size: 30px auto;
		background-position: 0px 54px;
		border-right:0 !important;
		width: 24px;
		height: 24px;
		border-radius:3px !important;
	}
	.body_top_right1 {
		display: inline-block;
		float: right;
		margin-top: -28px;
	}
	.body_top_right1 span {
		position: absolute;
		padding-right: 20px;
		color: #53a600;
		font-size: 15px;
		background: url(./img/dw.svg) right center no-repeat;
		right: 15px;
		top: 13px;
		background-size: 15px;	
	}
	input {
	margin: 0;
	padding: 0;
   }
   
</style>
