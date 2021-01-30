# 拖拽DOM例子

```
 fab() {
    var div1: any = document.querySelector('#fab');
    //限制最大宽高，不让滑块出去
    var maxW = document.body.clientWidth - div1.offsetWidth;
    var maxH = document.body.clientHeight - div1.offsetHeight;
    var oL, oT
    //手指触摸开始，记录div的初始位置
    div1.addEventListener('touchstart', function (e) {
      var ev = e || window.event;
      var touch = ev.targetTouches[0];
      oL = touch.clientX - div1.offsetLeft;
      oT = touch.clientY - div1.offsetTop;
      document.addEventListener("touchmove", defaultEvent, false);
    });
    //触摸中的，位置记录
    div1.addEventListener('touchmove', function (e) {
      var ev = e || window.event;
      var touch = ev.targetTouches[0];
      var oLeft = touch.clientX - oL;
      var oTop = touch.clientY - oT;
      if (oLeft < 0) {
        oLeft = 0;
      } else if (oLeft >= maxW - 56) {
        oLeft = maxW - 56;
      }
      if (oTop < 0) {
        oTop = 0;
      } else if (oTop >= maxH) {
        oTop = maxH;
      }
      div1.style.left = oLeft + 'px';
      div1.style.top = oTop + 'px';
    });
    //触摸结束时的处理
    div1.addEventListener('touchend', function () {
      document.removeEventListener("touchmove", defaultEvent);
    });
    //阻止默认事件
    function defaultEvent(e) {
      e.preventDefault();
    }
    // pc端
    // box1.onmousedown = function () {
    //   /*为document绑定一个onmousemove事件
    //    为什么要为document绑定事件而不是box1绑定呢？
    //              给box1绑定上则只有鼠标在box1上才会有效，此时只能随着鼠标往下移，很局限
    // */
    //   document.onmousemove = function (e: any) {
    //     console.log("触发了鼠标移动事件事件");
    //     var evt = e || event;
    //     console.log(e);
    //     //获取鼠标的位置
    //     //var left = evt.clientX;
    //     //var top = evt.clientY;
    //     //console.log(left,top);
    //     /*修改移动的元素的位置            
    //      注意：要修改元素的top，left值必须给它设置定位，否则无效*/
    //     box1.style.left = evt.clientX + "px";
    //     box1.style.top = evt.clientY + "px";
    //     console.log("box1的位置为：" + box1.style.left + "," + box1.style.top);
    //   };
    //   //为元素绑定一个鼠标松开事件：当松开时，元素固定在当前位置（取消document的onmousemove事件）
    //   box1.onmouseup = function () {
    //     document.onmousemove = null;
    //   };

    // };
  }
```