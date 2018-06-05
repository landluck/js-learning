记一下 `防抖` 和 `节流`

### 防抖

什么是防抖，一般我们在 `input` 输入框中输出值，并且向服务端查询数据的时候，如果每次 `input` 值发生改变，都向服务器发请求的话，难免会资源浪费，并且用户体验并不好，那么我们可以在 `input` 输入值后延迟一段时间，再发请求。就是 `防抖`

```
  <body>
    <input type="text" id="text">
    <script>
      document.getElementById('text').oninput = function () {
        search()
      }

      function search () {
        console.log('发起请求')
      }
    </script>
  </body>
```

测试上面代码，我们可以得到， 每次 `input` 的值发生改变，都会输出 `发起请求`， 为了调整发起请求的频率，我将代码调整这样

```
  <body>
    <input type="text" id="text">
    <script>
      const text = document.getElementById('text')
      text.oninput = debounce(search, 2000)

      function search() {
        console.log('发起请求')
      }

      function debounce(fn, delay) {
        let timer
        return function (...args) {
          if (timer) clearTimeout(timer)
          timer = setTimeout(() => {
            fn.apply(this, args)
          }, delay)
        }
      }
    </script>
  </body>
```

当然，`bind` 和 `apply` 以及 `call` 的用法自行百度。这个是否发现，当 `input` 输入一个值的时候，间隔 `2000ms` 才输出一个 `发起请求`, 如果我们连续输入， 只会输出一个 `发起请求`，这样看来防抖函数是成功了

原理其实涉及到了闭包，详细梳理一下

1.  当我们给 `text` 这个 `input` 绑定 `oninput` 事件时，我们给它绑定了 `debounce` 这个函数，传入真正执行业务逻辑的函数 `fn`, `debounce` 函数会返回一个新匿名函数，供 `input` 在 `oninput` 时调用
2.  同时，我们用 闭包 留住了 `timer`这个定时器 `id`, 当我们 新的匿名函数调用时，发现当前 `timer` 定时器存在， 清除定时器，创建新的定时器，这样，当输入频繁时，就保证了，如果间隔时间小于我们设置的值，那么上一次函数一定不会调用，从而达到了降低调用频率的效果

这就是一个最简单的防抖实现

### 节流

防抖，有一个问题，如果我们一直触发事件，回调函数只会在我们停止触发事件并达到了设置的时间间隔之后才会调用一次，也就是说在我们触发事件的过程中，回调函数一直没有执行，这在某些情况下，会跟需求不符。实际需求可能是

1.  减少触发频率
2.  中间一段时间需要执行回调函数

比如下面这个例子

```
 <style>
    #main {
      width: 800px;
      height: 100px;
      background: red
    }
  </style>
</head>

<body>
  <!-- 当我们的页面大于800的时候，什么都不做， 小于 800 的时候，我们的 main 区域要同步缩小 -->
  <div id="main"> this is main </div>
  <script>
    function resize () {
      const width = window.innerWidth
      console.log(width)
      if (width > 1000) return
      document.getElementById('main').style.width = width + 'px'
    }
    function throttle(fn, delay) {
      let timer
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          fn.apply(this, args)
        }, delay)
      }
    }
    window.onresize = throttle(resize, 1000)
  </script>
</body>
```

这个时候我们发现，当我水平缩小浏览器页面的时候，我的`main` 区域不会同步缩小，反而会在我停止缩小之后，延迟 `1000ms`后缩小，原因就是，在这过程中，回调函数一次都没有执行，为了回调函数能在一定的事件间隔后执行，将代码修改成这样

第一种方法
利用定时器实现

```
  <script>
    function resize () {
      const width = window.innerWidth
      console.log(width)
      if (width > 1000) return
      document.getElementById('main').style.width = width + 'px'
    }
    function throttle(fn, delay) {
      let isExecute = false
      return function (...args) {
        if (isExecute) return
        isExecute = true
        setTimeout(() => {
          fn.apply(this, args)
          isExecute = false
        }, delay)
      }
    }
    window.onresize = throttle(resize, 1000)
  </script>
```

第二种方法
利用时间差实现

```
  <script>
    function resize () {
      const width = window.innerWidth
      console.log(width)
      if (width > 1000) return
      document.getElementById('main').style.width = width + 'px'
    }
    function throttle(fn, delay) {
      let lastTime = new Date().getTime()
      let currentTime
      return function (...args) {
        currentTime = new Date().getTime()
        if (currentTime - lastTime < delay) return
        lastTime = currentTime
        fn.apply(this, args)
      }
    }
    window.onresize = throttle(resize, 1000)
  </script>
```

### 写在最后

| --       | 防抖                                                   | 节流                               |
| -------- | ------------------------------------------------------ | ---------------------------------- |
| 相同之处 | 都是限制回调函数调用频率                               |
| 不同之处 | 一段时间内，回调函数只会调用一次，即触发事件的最后一次 | 一段时间内，会每隔一段时间调用一次 |
