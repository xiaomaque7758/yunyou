<template>
  <div id="app-cart">
      <div class="around_hot">
              按热搜排序
      </div>
       <ul class="mui-table-view"  v-for="item in list" :key="item.id">
        <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
                <img class="mui-media-
                object mui-pull-left" :src="item.img_url" style="width:100px;height:100px;">
                <div class="mui-media-body" style="padding-left:10px">
                    <p class="around_title">{{item.title}}</p>
                    <p class='mui-ellipsis title2'>{{item.content}}</p>
                    <p  class="around_date">
                      <span>发船日期:{{item.date}}</span> 
                    </p>
                    <p class="around_list">
                        <span>单价:<span class="around_price">￥{{item.price}}</span></span>
                       <a href="javascript:;">
                        <span class="more_cp">立即预约 </span>
                       </a>
                    </p>
                </div>
            </a>
        </li>
    </ul>
     <mt-button class="button" type="primary" size="large" @click="getAround">加载更多</mt-button>
  </div>
</template>
<script>
export default {
    data(){
        return{
            list:[],     //显示数据列表
            pno:0,       //当前页码
            pageSize:3,  //页大小
            pageCount:1  //总页数
        }
    },
    methods:{
       getAround(){
             this.pno++;
             //创建变量保存是否有当前页条件
             //true 有数据 false 无数据
             var hasMore=this.pno <= this.pageCount;
             //如果没有页数，停止函数执行
             if(!hasMore){
                 return 
             }
             //1.发送请求，获取分页数据
             var url="Around?pno="+this.pno+"&pageSize="+this.pageSize;
             this.$http.get(url).then(result=>{
                 //console.log(result.body);
                 //this.list=result.body.data;
                var rows=this.list.concat(result.body.data);
                this.list=rows;
                //保留总页数
                this.pageCount=result.body.pageCount;
                
             });
             //2.并且显示组件模板中
             
         }
    },
    created(){
        this.getAround();
    }
}
</script>
<style>
.more_cp{
    color: #fff;
    background: #53a600;
    width: 90px;
    line-height: 26px;
    text-align: center;
    border-radius: 15px;
    float: right;
    margin-top:15px; 
    display: block;
}

.around_title{
    font-size: 15px;
    color: #53a600;
    padding: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.title2{
    margin-top: 4px;
}

.around_date{
    font-size: 12px;
    color: #a1a1a1;
    margin-top: 4px;
    padding: 0px 5px 5px 5px;

}

.around_list{
    font-size: 12px;
    padding: 0px 5px 5px 5px;
}

.around_price{
    font-size: 16px;
    color: #D40818;
}

.button{
    background: #fff !important;
    color:#3AB1FF !important;
}

.around_hot{
    width: 365px;
    height: 30px;
    background:#53a600;
    margin: 10px 0px 10px;
    text-align: center;
    color: #fff;
    margin-left: 4px;
    margin-right: 4px;
    font-size: 16px;
    line-height: 30px;
    border-radius: 5px;
}

</style>

