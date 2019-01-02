//1:加载模块
const express = require("express");
const pool = require("./pool");
//2:创建express对象
var app = express();
//2.1:加载跨域访问组件
const cors = require("cors");
//2.2:配置允许脚手架访问程序
app.use(cors({
    origin:["http://127.0.0.1:3002",
    "http://localhost:3002"],
    credentials:true
}));

//3:指定监听端口3333
app.listen(3333,function(){
	console.log("服务器创建成功");
});

//2.1:加载跨域访问组件


//4:指定静态目录 public
// __dirname 当前程序所属目录绝对路径 
//app.js vue_app_server
app.use(express.static(__dirname+"/public"))

//功能一：首页轮播图
app.get("/imagelist",(req,res)=>{
    var obj = [
      {aid:1,img_url:"http://127.0.0.1:3333/img/banner.jpg"},
      {aid:2,img_url:"http://127.0.0.1:3333/img/banner1.jpg"},
      {aid:3,img_url:"http://127.0.0.1:3333/img/banner2.jpg"},
    ];
    res.send(obj);
 });

//功能二：热门团购
 app.get("/goodsList",(req,res)=>{
    var obj=[]; 
    obj.push({bid:4,title:"远离雾霾、走进自然——瑶琳仙境、大奇山一日",content:"游通天飞瀑，观溶洞奇观",old:849,now:349,img_url:"http://127.0.0.1:3333/img/tg-bg.jpg",sc:568,dz:642,pl:184});
    obj.push({bid:5,title:"远离雾霾、走进自然——瑶琳仙境、大奇山一日",content:"游通天飞瀑，观溶洞奇观",old:849,now:349,img_url:"http://127.0.0.1:3333/img/tg-bg1.jpg",sc:568,dz:642,pl:184});
    obj.push({bid:6,title:"远离雾霾、走进自然——瑶琳仙境、大奇山一日",content:"游通天飞瀑，观溶洞奇观",old:849,now:349,img_url:"http://127.0.0.1:3333/img/tg-bg2.jpg",sc:568,dz:642,pl:184});
    res.send(obj);
  })
//热门路线
//周边游
  app.get("/travelAround",(req,res)=>{
    var obj=[]; 
    obj.push({lid:7,title:"远离雾霾、走进自然——瑶琳仙境",content:"游通天飞瀑，观溶洞奇观",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm1.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:8,title:"游通天飞瀑，观溶洞奇观",content:"“丽人健康游”通天飞瀑独家千人...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm2.png",sc:568,dz:642,pl:184});
    obj.push({lid:9,title:"东方小威尼斯",content:"苏州同里古镇乐扣乐扣...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm3.png",sc:568,dz:642,pl:184});
    obj.push({lid:10,title:"穹窿山、孙武文化园春季踏...",content:"景区内氧气充足，空气中负离子...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm4.jpg",sc:568,dz:642,pl:184});
    res.send(obj);
  })

  //国内游
  app.get("/chinaAround",(req,res)=>{
    var obj=[]; 
    obj.push({lid:7,title:"风从草原来",content:"在干燥气候条件下，顺着沙坡下滑...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm5.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:8,title:"西宁-青海湖",content:"前往闻名中外的旅游风景名胜区—青海湖，行走在有...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm6.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:9,title:"玩转花千骨",content:"走近电视剧花千骨的拍摄地...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm7.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:10,title:"拉萨-米拉山口-林芝-桃花沟...",content:"赴林芝，在这里您可以观赏到...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm8.jpg",sc:568,dz:642,pl:184});
    res.send(obj);
  })
  //出境游
  app.get("/outBound",(req,res)=>{
    var obj=[]; 
    obj.push({lid:7,title:"埃及",content:"开罗+亚历山大+...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm9.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:8,title:"埃及+  阿联酋  10  天之旅",content:"乘车前往开罗参观老城区，是埃及最...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm10.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:9,title:"德法瑞意+金色山口列车+少女峰+新天鹅堡",content:" 巴黎圣母院是一座位于法国巴黎市中心...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm11.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:10,title:"下龙湾、河内、芽庄、胡志明...",content:" 越南，一个景色秀美、充满情调却不让大家...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm12.jpg",sc:568,dz:642,pl:184});
    res.send(obj);
  })
  //自由行
  app.get("/free",(req,res)=>{
    var obj=[]; 
    obj.push({lid:7,title:"东南亚自由行",content:"泰国知名旅游项目，以当地旅游环境为依托...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm13.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:8,title:"日韩自由行",content:"每到樱花盛开的季节，日本便成为桃红色的世界...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm14.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:9,title:"云南自由行",content:"云南著名的旅游景点有昆明、大理、丽江、香格里拉、西双版纳...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm15.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:10,title:"三亚自由行...",content:"号称中国最美的海滩,海风凉爽,沙滩海水蓝天人气...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm16.jpg",sc:568,dz:642,pl:184});
    res.send(obj);
  })
  //邮轮行
  app.get("/Cruise",(req,res)=>{  
    var obj=[]; 
    obj.push({lid:7,title:"MU3月首尔一地 “ 3+2 ” 半自由行5天",content:"【南山公园+首尔塔】～位于首尔市中心的南山公园，树林繁茂...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm17.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:8,title:"尊享澳港澳-双直航五日游",content:"“丽人健康游”通天飞瀑独家千人...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm18.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:9,title:"东京名古屋富士山品质5日游",content:"中部-富士山-箱根...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm19.jpg",sc:568,dz:642,pl:184});
    obj.push({lid:10,title:"本州心感受【和服赏樱】温泉美食6日...",content:"前往东京，游览东京最富人情味的老街【浅草】...",old:849,now:349,img_url:"http://127.0.0.1:3333/img/rm20.jpg",sc:568,dz:642,pl:184});
    res.send(obj);
  })


//功能三：周边短线游
// app.get("/Around",(req,res)=>{
//   var obj=[]; 
//   obj.push({lid:1,title:"远离雾霾、走进自然——瑶琳仙境、大奇山一日",content:"回购最多 双飞 五星酒店。 游览大奇山国家森林公园...",img_url:"http://127.0.0.1:3333/img/around1.png",date:2017-09-09,price:2000});
//   obj.push({lid:2,title:"东方小威尼斯",content:"苏州同里古镇乐扣乐扣（中国）生产基地 一日游",img_url:"http://127.0.0.1:3333/img/around2.png",date:2017-09-09,price:49});
//   obj.push({lid:3,title:"穹窿山、孙武文化园春季踏青一日",content:"景区内氧气充足，空气中负离子含量每立方米达到2万个...",img_url:"http://127.0.0.1:3333/img/around3.png",date:2017-09-09,price:49});
//   obj.push({lid:4,title:"”女王驾到、老婆你最大“欢",content:"前往横店影视城游览清明上河图景区，欣赏杨门女将...",img_url:"http://127.0.0.1:3333/img/around4.png",date:2017-09-09,price:49});
//   obj.push({lid:5,title:"远离雾霾、走进自然——瑶琳仙境、大奇山一日",content:"回购最多 双飞 五星酒店。 游览大奇山国家森林公园...",img_url:"http://127.0.0.1:3333/img/around1.png",date:2017-09-09,price:2000});
//   obj.push({lid:6,title:"东方小威尼斯",content:"苏州同里古镇乐扣乐扣（中国）生产基地 一日游",img_url:"http://127.0.0.1:3333/img/around2.png",date:2017-09-09,price:49});
//   obj.push({lid:7,title:"穹窿山、孙武文化园春季踏青一日",content:"景区内氧气充足，空气中负离子含量每立方米达到2万个...",img_url:"http://127.0.0.1:3333/img/around3.png",date:2017-09-09,price:49});
//   obj.push({lid:8,title:"”女王驾到、老婆你最大“欢",content:"前往横店影视城游览清明上河图景区，欣赏杨门女将...",img_url:"http://127.0.0.1:3333/img/around4.png ",date:2017-09-09,price:49});
//   res.send(obj);
// })
app.get("/Around",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 3
  if(!pno){pno = 1}
  if(!pageSize){pageSize=3}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM yy_carts";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT id,title,content,img_url,ADATE,price FROM yy_carts LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
       pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });  


 //功能四：热门国内游
 app.get("/Hotaround",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 3
  if(!pno){pno = 1}
  if(!pageSize){pageSize=3}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM yy_carts";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT id,title,content,img_url,ADATE,price FROM yy_carts LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
       pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });  

 //功能五：特惠出境游
 app.get("/Cheaparound",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 3
  if(!pno){pno = 1}
  if(!pageSize){pageSize=3}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM yy_carts";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT id,title,content,img_url,ADATE,price FROM yy_carts LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
       pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });  

 //功能六：全国自行有
 app.get("/Freearound",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 3
  if(!pno){pno = 1}
  if(!pageSize){pageSize=3}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM yy_carts";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT id,title,content,img_url,ADATE,price FROM yy_carts LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
       pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });  

 //功能七：神秘游轮行
 app.get("/Msaround",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 3
  if(!pno){pno = 1}
  if(!pageSize){pageSize=3}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM yy_carts";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT id,title,content,img_url,ADATE,price FROM yy_carts LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
       pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });  

 //功能八：热门线路推荐
 app.get("/Hraround",(req,res)=>{
  //1:获取参数
  var pno = req.query.pno;
  var pageSize = req.query.pageSize;
  //2:设置默认值 1 3
  if(!pno){pno = 1}
  if(!pageSize){pageSize=3}
  //3:创建正则表达式验证用户输入验证
  var reg = /^[0-9]{1,3}$/;
  //4:如果错出停止函数运行
  if(!reg.test(pno)){
     res.send({code:-1,msg:"页编格式不正确"});
     return;
  }
  if(!reg.test(pageSize)){
     res.send({code:-2,msg:"页大小格式不正确"});
     return;
  }
 
  var progress = 0;
  var obj = {code:1};
  //5:创建sql1 查询总记录数   严格区分大小写
  var sql = "SELECT count(id) AS c FROM yy_carts";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    var pageCount = Math.ceil(result[0].c/pageSize);
    progress+=50;
    obj.pageCount = pageCount;
    if(progress==100){
      res.send(obj);
    }
  });
  //6:创建sql2 查询当前页内容 严格区分大小写
  var sql =" SELECT id,title,content,img_url,ADATE,price FROM yy_carts LIMIT ?,?";
  var offset =parseInt((pno-1)*pageSize);
       pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    progress+=50;
    obj.data=result;
    if(progress==100){
      res.send(obj);
    }
  })
  //7:返回结果
 });  