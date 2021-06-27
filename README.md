# 3 分钟知道什么是 vue

vue 是一个 js 框架, 他用 js 封装了 DOM 操作, 实现通过监听数据变化来自动更新 DOM, 所以我们写 vue 不需要使用 js 选择器去操作 dom, 而只要做 2 件事情:

1. 建立数据变量, **让dom的样式和内容等可以和变量一一映射**.
2. 操作数据变量, **让对应的dom样式和内容等自动更新变化**.

## 建立数据变量.

vue 有自己的文件格式, 扩展名是".vue", **每个 vue 文件我们叫他"组件"**, 下面是一个**vue**文件 :

```html
<template>
  <h1 :style="{color:color}">{{content}}</h1>
</template>

<script>
  export default defineComponent({
    data() {
      return {
        content: "hi vue",
        color: "#3eaf7c",
      };
    },
  });
</script>

<style>
  h1 {
    font-size: 32px;
  }
</style>
```

可以看出:

1. **vue**文件由`html`和`js`和`css`3 部分组成.
2. 其中 js 部分只有一个函数, 参数是一个对象数据, 这个对象就是组件的定义.
3. 定义变量放在参数的`data`字段中, 例子中变义了 2 个变量`content`和`color`, 分别表示"`h1`"的内容和样式.
4. 只有在`data`字段定义的变量才可以在vue的`template`模板中使用, **同时注意`data`是的函数.**
5. 参数不止`data`, 其他参数后续章节会一一介绍.
6. 模板中使用变量, 如果要绑定dom属性用":"语法, 比如":style". 内容绑定用"{{}}"语法.

## 操作数据变量.
数据操作我们一般都封装成函数放在`methods`中, 修改上面的例子, 页面上增加一个"按钮"用来修改"h1"的颜色和内容:

```html
<template>
  <h1 :style="{color:color}">{{content}}</h1>
  <button @click="changeH1">修改</button>
</template>

<script>
  export default defineComponent({
    data() {
      return {
        content: "hi vue",
        color: "#3eaf7c",
      };
    },

    methods:{
      changeH1(){
        this.color = '#f00';
        this.content = 'hello world';
      }
    }
  });
</script>

<style>
  h1 {
    font-size: 32px;
  }
</style>
```
归纳一下:
1. `changeH1`函数中我们修改了定义的变量, 注意操作变量需要使用`this.`表示, 但是在模板中使用变量我们可以省略`this.`.
2. 在按钮上我们绑定`click`事件和`changeH1`使用vue自己的语法"@"+事件名.