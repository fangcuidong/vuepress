# 产品UI规范

[[TOC]]

## 颜色

<img :src="$withBase('/typora-user-images/image-20201015095156103.png')">

- 设计核心-层次感：

  UI交互设计上“层次感”，是指权重层级分类清晰，并非指“立体感”。

  <img :src="$withBase('/typora-user-images/image-20201015112752471.png')">

  保存/关闭，在这里那个更重要？分不清！

  <img :src="$withBase('/typora-user-images/image-20201015112805306.png')">
  

  重要的颜色鲜艳即可，其他的不用太“<img :src="$withBase('/typora-user-images/image-20201015111234688.png')">”眼。

  

  

  是主次的 <img :src="$withBase('/typora-user-images/image-20201015112134346.png')">



## 前端组件库

<img :src="$withBase('/typora-user-images/image-20201015094932343.png')">

​													[https://element.eleme.cn/#/zh-CN/theme/preview](https://element.eleme.cn/#/zh-CN/theme/preview)



## 格式

-  必填(红星提示) 

<img :src="$withBase('/typora-user-images/image-20201014114342301.png')">

​	必填项【已输入】去掉“必填”状态提示



-  文本输入框（靠左显示）

  <img :src="$withBase('/typora-user-images/image-20201014114404906.png')">

- 数字输入框（靠右显示）
  

- 金额形式，带千分符

  <img :src="$withBase('/typora-user-images/image-20201014114610772.png')">

- 与数字有关的需附带单位说明

  <img :src="$withBase('/typora-user-images/image-20201014114014174.png')">

-  只读(灰色背景)

  <img :src="$withBase('/typora-user-images/image-20201014114719341.png')">

-  下拉选择框（靠左显示）

  <img :src="$withBase('/typora-user-images/image-20201014114744119.png')">

-  弹出选择框（靠左显示）

  <img :src="$withBase('/typora-user-images/image-20201014114847322.png')">

-  日期选择框（靠左显示）

  <img :src="$withBase('/typora-user-images/image-20201014114110338.png')">

-  复选框（勾选框在左，文字在右）

  <img :src="$withBase('/typora-user-images/image-20201014115107184.png')">

-  单选框（单选框在左，文字在右）

  <img :src="$withBase('/typora-user-images/image-20201014115040435.png')">

- 按钮（图标在右，文字在左）

  <img :src="$withBase('/typora-user-images/image-20201014114937348.png')">
  
  不要带“是否”字眼，默认开启为“是”，关闭为“否”



## 排版

- 重要信息靠前摆放

  <img :src="$withBase('/typora-user-images/image-20201015123131470.png')">

- 相似信息、对比信息就近摆放

- 对齐对齐再对齐

- 珍惜空间别浪费

- 字体、图标的大小及配色考虑协调

- 卡片样式注意美化

<img :src="$withBase('/typora-user-images/ECS丨战略预算与执行管理系统-2741722.png')"><img :src="$withBase('/typora-user-images/image-20201015140003301.png')">



## 自适应

- flex

  ```scss
  //竖向排版
  .flex-column {
    height: 100%;
    display: flex;
    -webkit-flex-direction: column;
    flex-direction: column;
    
    .flex-auto {
  ​    flex: 1;
  ​    min-height: 0;
    }
  }
  ```

  ```
  <div class="flex-column">
  		<div>其他内容</div>
  		<div class="flex-auto">自适应模块</div>
  </div>
  ```

  <img :src="$withBase('/typora-user-images/image-20201015175110594.png')">


  <img :src="$withBase('/typora-user-images/image-20201015180443679.png')">
  

- calc

```css
<div style="height:100%">
	<div style="width:60px"></div>
	<div style="width:calc(100vh - 60px)"><div>
<div>
```

<img :src="$withBase('/typora-user-images/image-20201015175630855.png')">