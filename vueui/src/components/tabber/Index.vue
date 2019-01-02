<template>
   <div class="app-index">
    <!--1.顶部导航栏-->
    <!--放在了App.vue-->
    <!--2.轮播图-->
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in listImg" :key="item.aid"><img :src="item.img_url" alt=""></mt-swipe-item>
    </mt-swipe>
    <!--3.九宫格-->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Around">
                <img class="menu" src="../../img/big1.png"/>
                <div class="mui-media-body"><span>周边短线游</span></div>
        </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Hotaround">
                <img class="menu" src="../../img/big2.png"/>
                <div class="mui-media-body"><span>热门国内游</span></div>
        </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Cheaparound">
                <img class="menu" src="../../img/big3.png"/>
                <div class="mui-media-body"><span>特惠出境游</span></div>
        </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Freearound">
                <img class="menu" src="../../img/big4.png"/>
                <div class="mui-media-body"><span>全国自行游</span></div>
        </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Msaround">
                <img class="menu" src="../../img/big5.png"/>
                <div class="mui-media-body"><span>神秘游轮行</span></div>
        </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/Hraround">
                <img class="menu" src="../../img/big6.png"/>
                <div class="mui-media-body"><span>热门线路推荐</span></div>
        </router-link>
        </li>
    </ul>
    <!--4.-->
    <div class="fk_con">
        <div class="fk_wrap">
           <a href="#">
               <div class="fk_img" style="padding-right:1px;">
                   <img src="../../img/fkqg1.jpg" style="width:100%">
               </div>
                <h2>积分商城</h2>
                <h3>生物新科技 有效品质</h3>
           </a>
        </div>
        <div class="fk_wrap">
            <a href="#">
                <div class="fk_img" style="padding-left:1px;">
                    <img src="../../img/fkqg2.jpg" style="width:100%">
                </div>
                <h2>会员专区</h2>
                <h3>1000元的尊享待遇</h3>
            </a>
        </div>
        <div class="clear"></div>
    </div>
    <!--5.-->
    <div class="yyxy">
       <a href="#">
           <img src="../../img/xy_bg.jpg">
           <div class="zz"></div>
           <div class="yyxy_text">
               <h3>云悦学院</h3>
               <img src="../../img/xybt_bg.png">
               <h6>云悦学院&nbsp;圆欲欣愿</h6>
               <span>查看更多</span>
           </div>
       </a>
    </div>
    <!--5.热门团购-->
    <div class="tuangou">
        <div class="active_title">
            <a href="#">
                <i></i>
                <span>热门团购</span>
                <i></i>
            </a>
        </div>
    </div>
    <div class="mui-card" v-for="item in listR" :key="item.bid">
        <div class="mui-card-header mui-card-media" style="height:50vw;width:100%;">
                <img :src="item.img_url" alt="" style="height:45vw;width:100%">
        </div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner" >
                <h2>{{item.title}}</h2>
                <h3 style="color: #333;">{{item.content}}</h3>
                
                    <h6>单价:<s>￥{{item.old}}</s></h6> 
                    <p>
                        <span class="sc">收藏{{item.sc}}次</span>
                        <span class="ll">点赞{{item.dz}}次</span>
                        <span class="pl">评论{{item.pl}}次</span>
                    </p>  
            </div>
        </div>
        <div class="mui-card-footer">
            <a class="mui-card-link">
               <h4> <span>团购价:</span>￥{{item.now}}</h4></a>
            <a class="mui-card-link">
               <span class="more_cp" @click="jumpDetail" :data-id="item.bid">立即抢团</span> </a>
        </div>
    </div>
    <!--5.热门路线-->
    <div class="tuangou">    
        <div class="active_title">
           <a href="#">
              <i></i>
              <span>热门线路</span>
              <i></i>
           </a>
         </div>
         <ul class="nav2" >
            <li v-for="(item,index) of list1" :key="item.id" @click="add(index)" v-bind:class="{focus
            :index==current}">{{item.name}}</li>
            <!-- <li @click="getMore3">国内游</li>
            <li @click="getMore4">出境游</li>
            <li @click="getMore5">自由行</li>
            <li  @click="getMore6">游轮游</li> -->
         </ul>
         <div class="clear"></div>
   </div>
   <ul class="mui-table-view"  v-for="item in listS" :key="item.lid">
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-
                object mui-pull-left" :src="item.img_url" style="width:100px;height:100px;">
                <div class="mui-media-body" style="padding-left:10px">
                    <p class="title">{{item.title}}</p>
                    <p class='mui-ellipsis title2'>{{item.content}}</p>
                    <p >
                      <span class="title3">￥{{item.old}}</span> 
                      <span class="sc">收藏{{item.sc}}次次</span>
                      <span class="sc">点赞{{item.dz}}</span>
                      <span class="sc">评论{{item.pl}}</span>
                    </p>
                    <a href="javascript:;">
                        <span class="more_cp2">立即预定</span>
                    </a>
                </div>
            </a>
        </li>
    </ul>
   <!--4.tabber-->
     <!--放在了App.vue-->
   </div>
</template>
<script>
    export default {    
        data(){
            return {
                current:0,
                list1:[{id:1,name:"周边游",en:"travelAround"},{id:2,name:"国内游",en:"chinaAround"},{id:3,name:"出境游",en:"outBound"},{id:4,name:"自由行",en:"free"},{id:5,name:"游轮游",en:"Cruise"}],
                listImg:[],
                listR:[],
                listS:[]
            }
        }, 
        methods:{
            jumpDetail(event){
                var id=event.target.dataset.id;
                console.log(id);
                this.$router.push("/Goods/"+id);
            },
            getImages(){
                this.$http.get("imagelist").then(result=>{
                    console.log(result.body);
                    this.listImg=result.body;
                })
            },
            getMore(){
                var url="goodsList";
                this.$http.get(url).then(result=>{
                    console.log(result.body);
                    this.listR=result.body;
                })
              },
            add(index){
                this.current=index;
                var url=this.list1[index].en;
                this.$http.get(url).then(result=>{
                    console.log(result.body);
                    this.listS=result.body;
                })
            },
            getMore2(){
                var url="travelAround";
                this.$http.get(url).then(result=>{
                    console.log(result.body);
                    this.listS=result.body;
                })
            }
        },
        created(){
            this.getImages();
            this.getMore();
            this.getMore2();
        }
        
    }
</script>
<style>
   .app-index .mint-swipe{
        height:220px;
    }
    .app-index .mint-swipe img{
       width:100%;
    }
     /*九宫格图片大小*/
    .menu{
        width:50px;
        height:50px;
    }
    span{
      font-size:12px;
    }
     /**/
     .fk_con{
         background-color: #fff;
     }
     .fk_wrap{
         width: 50%;
         float: left;
         margin-bottom: 20px;
     }
     .fk_wrap h2{
         font-size: 16px;
         text-align: center;
         color: #53a600;
         max-height: 15px;
         line-height: 15px;
         white-space: nowrap;
         padding: 0 5px;
         overflow: hidden;
         text-overflow: ellipsis;
         margin-top: 12px;
     }
     .fk_wrap h3{
         font-size: 12px;
         text-align: center;
         color: #666;
         letter-spacing: 0;
     }
     .clear{
         clear: both;
     }
     /**/
     .yyxy{
        position: relative;
     }
     .yyxy img{
         width: 100%;
         height: auto;
         display: block;
     }
     .yyxy .zz{
         position: absolute;
         width: 100%;
         height: 100%;
         left: 0;
         top: 0;
         background: #000;
         z-index: 2;
         filter: alpha(opacity=40);
         -moz-opacity: 0.4;
	     -khtml-opacity: 0.4;
	     opacity: 0.4;
     }
     .yyxy_text{
         position: absolute;
         z-index: 9;
         width: 100%;
         top: 20%;
     }
     .yyxy_text h3{
         color: #fff;
         font-size: 18px;
         text-align: center;
     }
     .yyxy_text img{
         display: block;
         margin: 12px auto;
         width: auto;
     }
     .yyxy_text h6{
         color: #fff;
         font-size: 12px;
         text-align: center;
         letter-spacing: 2px;
     }
     .yyxy_text span{
         display: block;
         margin: 25px auto 0 auto;
         background: #53a600;
         color: #fff;
         font-size: 12px;
         width: 90px;
         line-height: 26px;
         text-align: center;
         border-radius: 15px;
     }
     .active_title {
         margin-bottom: 20px;
     }
     .active_title a{
         display: block;
         text-align: center;
     }
     .active_title i {
         width: 20px;
         height: 1px;
         background: #53a600;
         display: inline-block;
	     margin-bottom: 5px;
     }
     .active_title a span {
         font-size:18px;
         background-size:15px;
         padding: 0 10px;
         color: #333;
     }
     /*5.热门团购*/
     .tuangou{
         margin-top: 40px;
         
     }
     .mui-card-content h2{
         font-size: 15px;
         height: 20px;
         line-height: 20px;
         color: #333;
         overflow: hidden;
         margin-top: 0;
         margin-bottom: 0;
         text-overflow: ellipsis;
	     white-space: nowrap;
     }
     .mui-card-content h3{
         font-size: 12px;
         color: #666;
         margin-bottom: 8px;
         line-height: 24px;
     }
     .mui-card-content h6{
         color: #666;
     }
     .mui-card-content h6 s{
         font-size: 16px;
     }
     .mui-card-content p{
         margin-bottom: 10px;
         text-align: right;
         float: right;
         margin-top: -27px;
     }
     .mui-card-content p span{
         padding-left: 5px;
         display: inline-block;
         color: #666;
         margin-bottom: 8px;
         margin-right: 10px;
     }
     .sc{
        /* background: url(../../img/sc_bg.svg) !important;*/
         height: 20px;
         padding-left:10px;
     }
     .mui-card-content p .ll{
        background: url(../../img/ll.svg);
     }
     .mui-card-content p .pl{
        background: url(../../img/pl.svg);
     }
     .mui-card-footer .more_cp{
         color: #fff;
         background: #53a600;
         width: 90px;
         line-height: 26px;
         text-align: center;
         border-radius: 15px;
         float: right;
         display: block;
     }
     .mui-card-link h4{
         font-size: 16px;
         color: #53a600;
         margin-top: 5px;
         font-weight: bold;
         margin-right: 30pxArial, Helvetica, sans-serif;
     }
     .mui-card-link h4 span {
         font-size: 14px;
         font-weight: normal;
         color: #333;
         font-family: "Microsoft YaHei", 微软雅黑, STHeiti !important;
         margin: 10px 0;
     }
     /*5.热门路线*/
     .nav2{
         background: #f2f2f2;
         margin-bottom: 20px;
         padding-left: 0px;
     }
     .nav2 li{
         width: 20%;
         float: left;
         line-height: 30px;
         text-align: center;
         list-style: none;
         border-right: 1px #EAEAEA solid;
         color: #666;
         font-size: 12px;
     }
     .nav2 li.focus{
         background: #53a600;
         border: none;
         color: #fff;
     }
     .title1{
        font-size: 14px;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        margin-top: 0;
        margin-bottom: 8px;
     }
     .title2{
        font-size: 12px;
        color: #666;
        margin-bottom: 8px;
        letter-spacing: 0;
     }
     .title3{
        font-size: 13px;
        color: #53a600;
        letter-spacing: 0;
        font-weight: bold;
     }
     .more_cp2{
        color: #fff;
        background: #53a600;
        width: 90px;
        line-height: 26px;
        text-align: center;
        border-radius: 15px;
        float: left;
        margin-top:15px; 
        display: block;
     }
</style>