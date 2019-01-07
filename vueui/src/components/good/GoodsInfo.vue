<template>
  <div id="app-goodsinfo">
    <!--轮播图卡片-->
  <!--  <div class="mui-card">
        <div class="mui-card-content">
            <div class="mui-card-content-inner">-->
                 <!--轮播子组件-->
                <swiper-box :list="list">
                </swiper-box>
         <!--   </div>
        </div>
    </div>-->
    <!--商品信息-->
     <div class="group_details">
        <h2>
             <i></i>
             初见西塘
        </h2>
        <h3>下单立减20元! 九喜 西塘初见精品酒店1晚+可加够西塘古镇门票【精美古镇 & 初见西塘】</h3>
        <div class="group_detailss_price">
            <h2>￥<span>160 </span>份起   <del>￥169.00</del></h2>
            <h3>
                <span class="spanpeice_one">已有666666人参团</span>
                <span class="spanpeice_two">拼力省 <b>30.00元</b> </span>
            </h3>
            <span class="count">票数</span> 
            <div class="mui-numbox">
				<button class="mui-btn mui-btn-numbox-minus" type="button" @click="goodSub">-</button>
				<input class="mui-input-numbox" type="number" value="1" v-model="val"/>
				<button class="mui-btn mui-btn-numbox-plus" type="button" @click="goodAdd">+</button>
			</div>
        </div>
    </div>
    
    <div class="group_details_cantuan">
         <h2>这些小伙伴已经快拼成团,你可以直接参团</h2>
        <ul>
           <li>
             <span>团长</span>
             <div class="group_details_left">
                <img src="../../img/around1.png" alt="" />
             </div>
             <div class="group_details_center">
               <h2>开心就好</h2>
               <p style="color:#000">还差<span style="color:#f3ac40">5</span>人成团</p>
               <p>剩余00小时00分00</p>
            </div>
            <div class="group_details_right">
                <a href="#" @click="addCart">立即<br/>参团</a>
             </div>
            <div class="clear"></div>
         </li>
         <li>
            <span>团长</span>
            <div class="group_details_left">
               <img src="../../img/around1.png" alt="" />
            </div>
            <div class="group_details_center">
               <h2>开心就好</h2>
               <p style="color:#000">还差<span style="color:#f3ac40">5</span>人成团</p>
               <p class="time">剩余00小时00分00</p>
            </div>
            <div class="group_details_right">
                <a href="#"  @click="addCart">立即<br/>参团</a>
            </div>
            <div class="clear"></div>
        </li>
     </ul>
    </div>

  </div>
</template>
<script>
//1.引入轮播图子组件
import swipe from "../sub/Swipe.vue"
//2.引入toast
import {Toast} from "mint-ui"
export default {
    data(){
        return{
            list:[],
            nid:this.$route.params.id,
            val:0,
        }
    },
    components:{
        "swiper-box":swipe
    },
    methods:{
        getImages(){
            this.$http.get("imagelist").then(result=>{
                console.log(result.body);
                this.list=result.body;
            })
        },
        addCart(){
        //1.获取参数
        var pid=this.$route.params.id;
        var count=this.val;
        var uid=3;
        //2.发送请求
        var url="http://127.0.0.1:3333/addCarts?pid="+pid+"&count="+count+"&uid="+uid;
        this.axios.get(url).then(result=>{
            if(result.data.code==1){
                //修改全局共享数据carCount
                this.$store.commit("increment",count);
                Toast("参团成功");
            }else{
                Toast("参团失败");
            }
        })
        //3.如果请示成功提示

       },
        goodSub(){
            if(this.val>0){
            this.val--
            }
        },
        goodAdd(){
            if(this.val<998){
            this.val++
            }
        },
    },
    created(){
        this.getImages()
    }
}
</script>
<style>
  .group_details{
      width: 100%;
      background: #fff;
      padding-bottom: 15px;
  }
  .group_details h2{
      padding: 10px 15px 0px 20px;
      line-height: 30px;
      font-size: 16px;
      margin: 0 !important;
      font-weight: bold;
  }
   .group_details h2 i{
       display: inline-block;
       width: 4px;
       height: 18px;
       background: #7ed321;
       margin-right: 5px;
       line-height: 30px;
       font-size: 18px;
       margin: 0 !important;
       position: relative;
       left: -3px;
       top: 3px;
       border-radius: 3px;
   }
   .group_details h3{
       padding: 0px 15px 10px 15px;
       line-height: 22px;
       font-size: 14px;
       margin: 0!important;
   }
   .group_details .group_detailss_price{
       line-height: 30px;
       height: auto;
       overflow: hidden;
       padding: 0px 15px;
   }
    .group_details .group_detailss_price h2{
        color: #53a600;
        margin: 0 !important;
        padding: 0px;
        font-size: 14px;
        font-weight: normal;
    }
    .group_details .group_detailss_price h2 span{
        font-size: 18px;
    }
    .group_details .group_detailss_price h3{
        color: #ff9600;
        margin: 0 !important;
        font-size: 12px;
        padding: 0;
        font-weight: normal;
    }
    .group_details .group_detailss_price h3 .spanpeice_one{
         display: inline-block;
         position: relative;
         color: #b7b7b7;
         font-weight: normal;
     }
    .group_details .group_detailss_price h3 .spanpeice_two{
        display: inline-block;
        margin-left: 15px;
        background: #53a600;
        font-size: 14px;
        line-height: 20px;
        border: 1px solid #53a600;
        position: relative;
        color: #fff;
        font-weight: normal;
        padding-left: 5px;
    }
     .group_details .group_detailss_price h3 .spanpeice_two b{
         display: inline-block;
         background: #fff;
         line-height: 24px;
         font-size: 13px;
         padding: 0 5px;
         position: relative;
         color: #CA0000;
     }


     .group_details_cantuan{
         margin:15px 0;
         background: #fff;
     }

    .group_details_cantuan>h2{
        padding: 15px 0;
        margin: 0 15px;
        border-bottom: 1px solid #e6e6e6;
        font-size:14px;
        color:#4e4e4e;
        line-height: 20px;
        text-align: center;
    }
    .group_details_cantuan ul{
        width: 100%;
        background: #fff;
        padding-left: 0px;
    }

    .group_details_cantuan ul li{
        width: 100%;
        padding: 15px 15px;
        background: #fff;
        overflow: hidden;
        position: relative;
        border-radius: 1px solid #e6e6e6;
    }

     .group_details_cantuan ul li>span{
         display: block;
         position: absolute;
         padding: 0 5px;
         font-size: 12px;
         color: #fff;
         background: #53a600;
         z-index: 9999;
         top: 65px;
         left: 30px;
         border-radius: 10px;
     }
     .group_details_left{
         width: 65px;
         height: 65px;
         float: left;
         border-radius: 100%;
         overflow: hidden;
         border: 3px solid #53a600;
         position: relative;
     }
     .group_details_left img{
        display: block;
        width: 100%;
     }
    .group_details_center{
        width: 43%;
        float: left;
        overflow: hidden;
        margin-left: 10px;
    }
    .group_details_center h2{
        width: 100%;
        font-size: 15px;
        color: #000;
        line-height: 20px;
        letter-spacing: 0px;
    }
    .group_details_center p{
        font-size: 12px;
        line-height: 20px;
        margin-bottom: 0px;
    }
    .group_details_center .time{
        font-size: 12px;
        line-height: 20px;
        color: #999;
    }
    .group_details_right{
        overflow: hidden;
        margin-top: 10px;
    }
    .group_details_right a{
        display: block;
        font-size: 12px;
        text-align: center;
        color: #53a600;
        border: 1px solid #53a600;
        width: 46px;
        height: 46px;
        border-radius: 50%;
        float: right;
        padding-top: 3px;
    }

    /*票数*/
   .count{
        font-size: 14px;
        color: #000;
        margin-right: 5px;
    }
    .app-goodsinfo.group_detailss_price .mui-numbox{
        margin-left: 2px !important;
        margin-top: 10px;
    }
</style>

