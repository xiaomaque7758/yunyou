 <template>
  <div id="app-myself">

     <div class="p_credit">
          <div>
              <img src="../../img/useheadBj.jpg" alt="">
          </div>
          <div class="headpic">
               <div class="circle_pic">
                 <img src="../../img/user_tx.jpg" alt="">
               </div>
               <div class="headpicR">
                   <P class="name">小麻雀</P>
                   <p class="mumber"><img src="../../img/vip.png"><span>青铜会员</span></p>
                   <p class="mumber">云游币：<i>200</i>个</p>
               </div>
          </div>
     </div>

         <div class="p_myorder">
             <ul class="p_myorder_ul">
                <li><a href="#">
                   <p><img src="../../img/p_order_03.png" /></p>
                   我的订单</a></li>
                <li><a href="#">
                  <p><img src="../../img/p_order_04.png" /></p>
                  退款</a></li>
                <li><a href="#">
                  <p><img src="../../img/p_order_05.png" /></p>
                   待评价</a> </li>
                <li><a href="#">
                  <p><img src="../../img/p_order_07.png" /></p>
                    已评价</a></li>
                <li><a href="#" class="qxdd">
                  <p><img src="../../img/qiandao.png" /></p>
                  签到</a></li>
             </ul>
         </div>
         <div class="p_myinfo">
           <p>
               <i> <img src="../../img/p_user_15.png" alt=""></i>
               <span>申请会员</span>
               <span class="fr_else">申请会员送积分&nbsp;&nbsp;
                   <div class="arrow"></div>
                </span>
            </p>
           <p>
               <i> <img src="../../img/p_user_12.png" alt=""></i>
               <span class="arrow">我的邀请</span>
               <span class="fr_else">
                   <i class="fa fa-angle-right"></i>
                </span>
            </p>
           <p><i> <img src="../../img/jftx.png" alt=""></i><span>云游币</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
           <p><i> <img src="../../img/wdqy.png" alt=""></i><span>我的权益</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
    
           <p><i> <img src="../../img/p_user_01.png" alt=""></i><span>我的积分</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
           <p><i> <img src="../../img/p_user_01.png" alt=""></i><span>积分商城</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
           <p><i> <img src="../../img/p_user_02.png" alt=""></i><span>积分兑换记录</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
    
           <p><i> <img src="../../img/p_user_09.png" alt=""></i><span>我的资料</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
           <p><i> <img src="../../img/p_user_16.png" alt=""></i><span>我的银行卡</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
           <p><i> <img src="../../img/p_user_10.png" alt=""></i><span>详细地址</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
           <p><i> <img src="../../img/p_user_11.png" alt=""></i><span>修改密码</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
           <p><i> <img src="../../img/p_user_04.png" alt=""></i><span>我的收藏夹</span><span class="fr_else"><i class="fa fa-angle-right"></i></span></p>
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
   .p_credits{
	height: 220px;
	background-color: #e2e2e2;
	background-position:center center;
	background-repeat:no-repeat; 
    background-size:cover;
    -moz-background-size:cover;
    -webkit-background-size:cover;
    -o-background-size:cover;
	width:100%;
	margin:0 auto;
	padding:0 2.5%;
	position:relative;
	top:50px;
}


.headpic{
	position:absolute; 
	left:0; top:30px;
	text-align:center; width:100%;
}

.headpic .circle_pic img{ 
    margin-top:20px;
	border-radius: 50%;
	width: 68px;
	height: 68px;
	display:inline-block;
	background-color: #fff;
	position: relative;
	border:3px solid #fff;
	background-position:center center;
	background-repeat:no-repeat;
	background-size:cover;
    -moz-background-size:cover;
    -webkit-background-size:cover;
    -o-background-size:cover;

}


.p_credits .name{
	color:#fff;
	font-size:14px;
	font-weight:bold; letter-spacing:2px; margin:3px auto 25px;
}

.headpicR .mumber{
	font-size:12px;
	display:inline-block;
	height:22px;
	background:#fff;
	line-height: 22px;
	border-radius: 3px;
	margin-top:9px;padding:0 12px; margin:0 10px;
    vertical-align:text-top;
}

.headpicR .mumber span{
	color:#8b877c; 
    font-size:12px; 
    padding-left:6px;
    vertical-align:top;

    line-height: 22px;
}
.headpicR .mumber img{
    width:32px;
    margin-top:3px;
}
.headpicR .mumber i{ 
    font-style:normal; 
    color:#f00; 
    font-weight:bold; 
    font-size:14px; 
    padding-right:2px;
}

.p_myorder{
    display: flex;
    margin-bottom: 10px;
    background: #fff;
}
.p_myorder_ul{
    width: 100%;
    list-style: none;
    flex-direction: row;
    justify-content: space-between;
    padding: 0px;
}
.p_myorder_ul li{
    width: 20%;
    text-align: center;
    float:left;
    font-size: 12px;
}
.p_myorder_ul li a{
    color:#333;
}
.p_myorder_ul p{
    height: 32px;
    text-align: center;
    margin: 0  auto;   
    width: 30px;
}
img{
    width: 100%;
}

.p_myinfo{
    background: #fff;
    padding: 10px 18px 15px;
}
.p_myinfo>p{
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px dotted #ccc;
}
.p_myinfo i{
    display: inline-block;
    width: 24px;
    height: 24px;
    position: absolute;
    line-height: 24px;
}
.p_myinfo i img{
    width: 100%;
}
.p_myinfo span{
    color: #666;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    padding-left: 34px;
}
.p_myinfo .fr_else{
    float: right;
    color: #999;
    font-size: 12px;
    margin-right: 5px;
}

.arrow{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.arrow::after{
  content:"";
  width:15rpx;
  height: 15rpx;
  border-top: 3rpx solid #ccc;  /*箭头边框*/
  border-right: 3rpx solid #ccc; 
  transform: rotate(45deg)
}


</style>

