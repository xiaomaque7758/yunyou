<template>
  <div class="app-find">
     <div class="mui-card">
        <div class="mui-card-header">
           <span> 精选</span></div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
               <img src="../../img/hdsm_bg.jpg" alt="">
            </div>
        </div>
        <div class="mui-card-footer">
           <h3>全市宁波人！杨梅开摘！喜欢快来</h3>
        </div>
        <div class="footer">
            <span class="t1">5.20-7.10</span>
            <span class="t2">云游俱乐部</span> 
            <span class="t3">1200</span>
        </div>
	</div>
  
  </div>
</template>
<script>
export default {
    data(){
        return{}
    }
}
</script>
<style>
.app-find .mui-card .mui-card-header>span{
    font-size: 15px;
    color: #999999;
    margin: 0 auto;
}
.app-find .mui-card-content .mui-card-content-inner{
    padding: 0px;
}
.app-find .mui-card-footer>h3{
    font-size: 16px;
    color: #53A600;
}
.app-find .footer{
    padding: 10px 15px;
}
.app-find .footer .t1{
    color: #999;
    padding-right: 20px;
}
.app-find .footer .t2{
    color: #999;
}
.app-find .footer .t3{
    float: right;
    color: #53A600;
}
</style>

