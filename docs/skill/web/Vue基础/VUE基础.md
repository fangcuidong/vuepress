# VUE相关

## 面试题

### 常用指令


- `v-model` 多用于表单元素实现双向数据绑定（同angular中的ng-model）

- `v-for` 格式： v-for="字段名 in(of) 数组json" 循环数组或json(同angular中的ng-repeat),需要注意从vue2开始取消了$index

- `v-show` 显示内容 （同angular中的ng-show）

- `v-hide`  隐藏内容（同angular中的ng-hide）

- `v-if`    显示与隐藏  （dom元素的删除添加 同angular中的ng-if 默认值为false）

- `v-else-if`  必须和`v-if`连用

- `v-else`  必须和v-if连用  不能单独使用  否则报错   模板编译错误

- `v-bind`  动态绑定  作用： 及时对页面的数据进行更改

- `v-on:click` 给标签绑定函数，可以缩写为@，例如绑定一个点击函数 
函数必须写在methods里面

- `v-text`  解析文本

- `v-html`   解析html标签

- `v-bind:class`   三种绑定方法  
  - 1、对象型  `'{red:isred}'`  
  - 2、三元型   `'isred?"red":"blue"'`   
  - 3、数组型  `'[{red:"isred"},{blue:"isblue"}]'`

- `v-once`  进入页面时  只渲染一次 不在进行渲染

- `v-cloak`  防止闪烁

- `v-pre`  把标签内部的元素原位输出

---

### 对MVVM的理解？

MVVM是Model-View-ViewModel的缩写，Model代表数据模型负责业务逻辑和数据封装，View代表UI组件负责界面和显示，ViewModel监听模型数据的改变和控制视图行为，处理用户交互，简单来说就是通过双向数据绑定把View层和Model层连接起来。在MVVM架构下，View和Model没有直接联系，而是通过ViewModel进行交互，我们只关注业务逻辑，不需要手动操作DOM，不需要关注View和Model的同步工作。

----

### vue等单页面应用及优缺点

vue核心是一个响应的数据绑定系统，mvvm，数据驱动，组件化，轻量，简洁，高效，快速，模块友好。

缺点：不支持低版本浏览器，最低到IE9，不利于SEO的优化，首页加载时间较长，不可以使用浏览器的导航按钮需要自行实现前进后退 

----

### 什么是RESTful API，然后怎么使用？

RESTful是一个api的标准，无状态请求。请求的路由地址是固定的。 restful：给用户一个url，根据method不同在后端做不同处理：比如post 创建数据，get 获取数据，put和patch修改数据，delete删除数据

----

### vue-cli中src目录下每个文件的用途？

1. vue-cli名字改为@vue/cli，所以全局安装了旧版的要通过
<font face="微软雅黑" color=#f00>```npm install vue-cli -g```</font>   
安装新版vue-cli   
<font face="微软雅黑" color=#f00>```npm install -g @vue/cli```</font>   

2.创建一个项目<font face="微软雅黑" color=#f00>``` vue create hello-world```</font>

3.assets文件夹是放静态资源；components是放组件；router是定义路由相关的配置;view视图；app.vue是一个应用主组件；main.js是入口文件

----

### v-model的原理

```javascript
<input v-model="msg" />
```

相当于

```javascript
<input v-bind:value="msg" v-on:input="msg=$event.target.value" />
```

### v-if和v-show的区别

v-show只是在display: none和display: block之间切换，只需要切换CSS，DOM还是一直保留着，v-show在初始渲染时有更高的开销，但是切换开销很小，更适合频繁切换的场景   

v-if涉及到vue底层的编译，当属性初始为false时组件不会被渲染，直到条件为true，并且切换条件时会触发销毁/挂载组件，切换时开销更高，更适合不经常切换的场景

----

### route和router的区别

route是路由信息对象，包括path,params,hash,query,fullPath,matched,name等路由信息参数。

router是路由实例对象，包括了路由的跳转方法，钩子函数。

----

### 怎么定义vue-souter的动态路由？怎么获取传过来的值

在router目录下的index.js文件，对path属性加上:id，使用router对象的params.id获取

----

### active-class是哪个组件的属性？嵌套路由怎么定义

active-class是vue-router模块中router-link组件的属性

使用children定义嵌套路由

----

### 对keep-alive的了解

keep-alive是一个内置组件，可使被包含的组件保留状态或避免重新渲染，有inclube（包含的组件缓存）和exclude（排除的组件缓存）两个属性。

----

### vue常用修饰符

- .prevent 提交时间不再重载页面
- .stop 阻止单击事件冒泡
- .self 当事件发生在该元素本身而不是子元素的时候触发
- .capture 事件侦听，事件发生的时候会调用

----

### 组件中data什么时候可以适用对象

组件利用时所有组件实例都会共享data，如果data是对象就会造成一个组件修改data以后会影响到其他所有组件，所以需要将data写成函数，每次用到就调用一次函数获取新的数据

当我们使用new Vue()的方式的时候，无论我们将data设置为对象还是函数都是可以的，因为new Vue()的方式是生成一个根组件，该组件不会复用，也就不存在共享data的情况

----

### vue-cli如何新增自定义指令

1.创建局部指令
```javascript
directives:{
   // 指令名称
   dir1: {
       inserted(el){
           // 第一个参数是当前使用指令的DOM
           el.style.width = '200px';
           el.style.height = '200px';
           el.style.background = '#000'
       }
   }
}
```

2.全局指令
```javascript
Vue.directive('dir2', {
    inserted(el){
        console.log(el)
    }
})
```

3.指令的使用

```javascript
<div v-dir1></div>
<div v-dir2></div>
```
----

### vue如何自定义一个过滤器

```javascript
<input type="text" v-model="msg" />
{{msg | capitalize}}

data(){
    return{
        msg: ''
    }
},
filters: {
    capitalize: function(value){
        //如果未输入
        if(!value) return "";
        //如果输入框有内容，将首字母转成大写返回
        value = value.toString();
        return value.charAt(0).toUpperCase()+value.slice(1)
    }
}

```

----

### computed和watch的区别

computed是计算属性，依赖其他属性计算值，并且computed的值有缓存，只有当计算值变化才会返回内容

watch监听到值的变化就会执行回调，在回调中可以进行一些逻辑操作。

一般来说需要依赖别的属性来动态获取值的时候可以使用computed，对于监听到值的变化需要做一些复杂业务逻辑的情况可以使用watch

另外computed和watch还支持对象的写法

```javascript
<input type="text" v-model="msg" />
{{msg | capitalize}}

data(){
    return{
        msg: ''
    }
},
filters: {
    capitalize: function(value){
        if(!value) return "";
        value = value.toString();
        return value.charAt(0).toUpperCase()+value.slice(1)
    }
}
```

----

### extend能做什么？

作用是扩展组件生成一个构造器，通常与$mount一起使用。

```javascript
// 创建组件构造器
let Component = Vue.extend({
    template: '<div>test</div>'
})
// 挂载到#app上
new Component().$mount('#app')

// 扩展已有组件
let SuperComponent = Vue.extend(Component)
new SuperComponent({
    created(){
        console.log(1)
    }
})
new SuperComponent().$mount('#app')
```

----

### mixin和mixins的区别
mixin用于全局混入，会影响到每个组件实例，通常插件都是这样做初始化的。
```javascript
Vue.mixin({
    beforeCreate(){
        // 会影响到每个组件的beforeCreate钩子函数
    }
})
```

mixins最常用的扩展组件的方式。如果多个组件有相同的业务逻辑，就可将这些逻辑剥离出来，通过mixins混入代码。需要注意：mixins混入的钩子函数会先于组件内的钩子函数执行，并且在遇到同名选项的时候也会有选择性的进行合并。

----

### 什么是vue生命周期，有什么作用？

1.什么是vue生命周期？有什么作用？    
每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做 生命周期钩子 的函数，这给了用户在不同阶段添加自己的代码的机会。（ps：生命周期钩子就是生命周期函数）例如，如果要通过某些插件操作DOM节点，如想在页面渲染完后弹出广告窗， 那我们最早可在mounted 中进行

2.vue生命周期的8个阶段？    
beforeCreate：在new一个vue实例后，只有一些默认的生命周期钩子和默认事件，其他的东西都还没创建。在beforeCreate生命周期执行的时候，data和methods中的数据都还没有初始化。不能在这个阶段使用data中的数据和methods中的方法
create：data 和 methods都已经被初始化好了，如果要调用 methods 中的方法，或者操作 data 中的数据，最早可以在这个阶段中操作
beforeMount：执行到这个钩子的时候，在内存中已经编译好了模板了，但是还没有挂载到页面中，此时，页面还是旧的
mounted：执行到这个钩子的时候，就表示Vue实例已经初始化完成了。此时组件脱离了创建阶段，进入到了运行阶段。 如果我们想要通过插件操作页面上的DOM节点，最早可以在和这个阶段中进行
beforeUpdate： 当执行这个钩子时，页面中的显示的数据还是旧的，data中的数据是更新后的， 页面还没有和最新的数据保持同步
updated：页面显示的数据和data中的数据已经保持同步了，都是最新的
beforeDestory：Vue实例从运行阶段进入到了销毁阶段，这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于可用状态。还没有真正被销毁
destroyed： 这个时候上所有的 data 和 methods ， 指令， 过滤器 ……都是处于不可用状态。组件已经被销毁了。 

3.第一次加载页面会触发哪些钩子？
beforeCreate， created， beforeMount， mounted
！

----

### 如何使用vue.nextTick()?

nextTick可以使我们在下次DOM更新循环结束之后执行延迟回调，用于获得更新后的DOM    
参考链接：[vue.nextTick()方法的使用详解](https://blog.csdn.net/zhouzuoluo/article/details/84752280)

```javascript
data:function(){
    return {
        message: '没有更新'
    }
},
methods: {
    updateMessage: function(){
        this.message='更新完成'
        console.log(this.$el.textContent) // '没有更新'
        this.$nextTick(function(){
          console.log(this.$el.textContent)// '更新完成'  
        })
    }
}
```
----

### transition 过渡的实现原理

```javascript
<transition name="fade1">
    <router-view></router-view>
</transition>
```
**类名介绍**
1. <font face="微软雅黑" color=#f00>``` v-center```</font>：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

2. <font face="微软雅黑" color=#f00>``` v-center-active```</font>：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

3. <font face="微软雅黑" color=#f00>``` v-enter-to```</font>: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

4. <font face="微软雅黑" color=#f00>``` v-leave```</font>: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

5.  <font face="微软雅黑" color=#f00>``` v-leave-active```</font>:定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

6. <font face="微软雅黑" color=#f00>``` v-leave-to```</font>:2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除

参考官方文档：[过渡的类名](https://cn.vuejs.org/v2/guide/transitions.html#%E8%BF%87%E6%B8%A1%E7%9A%84%E7%B1%BB%E5%90%8D)
![过渡的类名](https://cn.vuejs.org/images/transition.png)

----

### 简单说一下组件通信

#### 父子通信
##### 1.props和emit

父组件通过props传递数据给子组件，子组件通过emit发送事件传递给父组件。

```javascript
// 父组件
<div>
    <child :data="child" @send="getFromChild"></child>
</div>

data(){
    return{
        toChild: '大儿子',
        fromChild: ''
    }
},
methods: {
    getFromChild(val){
        this.fromChild=val
    }
}
// 子组件
<div @click="toParent">{{data}}</div>

props:[data],
methods: {
    toParent(){
        this.$emit('send', '给父亲')
    }
}
```


##### 2.v-model

v-model其实是props，emit的语法糖，v-model默认会解析成名为value的prop和名为input的事件。

```javascript
// 父组件
<children v-model="msg"></children>
<p>{{msg}}</p>

data(){
    return{
        msg:'model'
    }
}
// 子组件
<input :value="value" @input="toInput" />

props: ['value'],
methods: {
    toInput(e){
        this.$emit('input', e.target.value)
    }
}
```

##### 3.在父组件使用<font face="微软雅黑" color=#f00>``` $children```</font>访问子组件，在子组件中使用<font face="微软雅黑" color=#f00>``` $parent```</font>访问父组件

```javascript
// 父组件
<child />

data(){
    return {
        msg: '父组件数据'
    }
},
methods: {
    test(){
        console.log('我是父组件的方法，被执行')
    }
},
mounted(){
    console.log(this.$children[0].child_msg); // 执行子组件方法
}
// 子组件
<div>{{$parent.msg}}</div>

data(){
    return{
        child_msg: '子组件数据'
    }
},
mounted(){
    // 子组件执行父组件方法
    this.$parent.test(); 
}
```