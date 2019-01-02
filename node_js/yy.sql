SET NAMES UTF8;
DROP DATABASE IF EXISTS yy;
CREATE DATABASE yy CHARSET=UTF8;
-- #1.进入数据库 yy
USE yy;
-- #2.创建表 yy_carts
CREATE TABLE yy_carts(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(128),
    content VARCHAR(255),
    img_url VARCHAR(255),
    ADATE DATE,
    price DECIMAL(6,2)
);
-- #3.添加10条记录
INSERT INTO yy_carts VALUES(1,"远离雾霾、走进自然——瑶琳仙境、大奇山一日","回购最多 双飞 五星酒店。 游览大奇山国家森林公园...","http://127.0.0.1:3333/img/around1.png",2017-09-09,2000);
INSERT INTO yy_carts VALUES(2,"东方小威尼斯","苏州同里古镇乐扣乐扣（中国）生产基地 一日游","http://127.0.0.1:3333/img/around2.png",2017-09-09,49);
INSERT INTO yy_carts VALUES(3,"穹窿山、孙武文化园春季踏青一日","景区内氧气充足，空气中负离子含量每立方米达到2万个...","http://127.0.0.1:3333/img/around3.png",2017-09-09,2000);
INSERT INTO yy_carts VALUES(4,"女王驾到、老婆你最大欢","前往横店影视城游览清明上河图景区，欣赏杨门女将...","http://127.0.0.1:3333/img/around4.png",2017-09-09,49);
INSERT INTO yy_carts VALUES(5,"远离雾霾、走进自然——瑶琳仙境、大奇山一日","回购最多 双飞 五星酒店。 游览大奇山国家森林公园...","http://127.0.0.1:3333/img/around1.png",2017-09-09,2000);
INSERT INTO yy_carts VALUES(6,"东方小威尼斯","苏州同里古镇乐扣乐扣（中国）生产基地 一日游","http://127.0.0.1:3333/img/around2.png",2017-09-09,49);
INSERT INTO yy_carts VALUES(7,"穹窿山、孙武文化园春季踏青一日","景区内氧气充足，空气中负离子含量每立方米达到2万个...","http://127.0.0.1:3333/img/around3.png",2017-09-09,2000);
INSERT INTO yy_carts VALUES(8,"女王驾到、老婆你最大欢","前往横店影视城游览清明上河图景区，欣赏杨门女将...","http://127.0.0.1:3333/img/around4.png",2017-09-09,49);
INSERT INTO yy_carts VALUES(9,"远离雾霾、走进自然——瑶琳仙境、大奇山一日","回购最多 双飞 五星酒店。 游览大奇山国家森林公园...","http://127.0.0.1:3333/img/around1.png",2017-09-09,2000);
INSERT INTO yy_carts VALUES(10,"东方小威尼斯","苏州同里古镇乐扣乐扣（中国）生产基地 一日游","http://127.0.0.1:3333/img/around2.png",2017-09-09,49);




