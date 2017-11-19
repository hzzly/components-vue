class Swiper {
  constructor(selector) {
    this.x0 = ''
    this.y0 = ''
    this.hasmoved = 0
    this.lock = 0
    this.transition = "-webkit-transition: -webkit-transform .3s ease",
    this.css = [
      "z-index: 3; -webkit-transform: translate3d(0, 0, 10px) scale3d(1, 1, 1); visibility: visible;",
      "z-index: 2; -webkit-transform: translate3d(88px, 0, 6px) scale3d(.8, .8, 1); visibility: visible;",
      "z-index: 2; -webkit-transform: translate3d(-88px, 0, 6px) scale3d(.8, .8, 1); visibility: visible;",
      "z-index: 1; -webkit-transform: translate3d(-64px, 0, 2px) scale3d(.667, .667, 1); visibility: visible;",
      "z-index: 1; -webkit-transform: translate3d(64px, 0, 2px) scale3d(.667, .667, 1); visibility: visible;"
    ];

    this.list = document.querySelector(selector);
    list ? this.init(list) : console.log(selector + " undefined");
  }

  init(list) {
    this.container = list;
    list.style["-webkit-transform-style"] = "preserve-3d";
    this.item = list.querySelectorAll("li");
    for (let i = 0; i < this.item.length; ++i) {
      this.item[i].style.visibility = "hidden"
    }
    this.queue = function(len) { // 索引列表，用于处理切换的序号队列 
      // 一个对应 item 的数组，记录 DOM 信息
      const arr = [];
      for (var i = 0; i < len; ++i) arr[i] = i;
      return arr;
    }(this.item.length);
    this.visual = new Array(this.item.length); // 与 item 做对应的虚拟DOM
    swap("without transition"); // 初始排版
    if (this.item.length <= 1) return;
    this.container.addEventListener("touchstart", touchstartHandle);
    this.container.addEventListener("touchmove", touchmoveHandle);
  }

  touchstartHandle(e) {
    const touch = e.targetTouches[0],
          x = touch.pageX,
          y = touch.pageY
    this.x0 = x, this.y0 = y, this.hasmoved = 0, this.lock = 0
  }

  touchmoveHandle(e) {
    if (this.lock) return
    const touch = e.targetTouches[0],
          x = touch.pageX,
          y = touch.pageY,
          offsetX = x0 - x,
          offsetY = y0 - y
    // 阻止滚动
    this.hasmoved || (this.hasmoved = 1, Math.abs(offsetX) > Math.abs(offsetY) && e.preventDefault())
    if (offsetX <= -50) {
      // 向右
      console.log("向右")
      this.queue.push(this.queue.shift())
      this.lock = 1
      this.swap()
    } else if (offsetX >= 50) {
      // 向左
      console.log("向左")
      this.queue.unshift(this.queue.pop())
      this.lock = 1
      this.swap()
    }
  }

  swap(withoutTransition) {
    const queue = [...this.queue],
          count = 0,
          len = this.visual.length,
          visual = new Array(len),
          odd = 1
    // 提取前三个元素与后三个元素
    while (count < 5 && queue.length > 0) {
      visual[odd ? queue.shift() : queue.pop()] = this.css[count++] + (withoutTransition ? "" : this.transition);
      odd = !odd; // 取反
    }
    // 对比一下数组 
    for (var i = 0; i < len; ++i) {
      visual[i] != this.visual[i] && (this.visual[i] = visual[i], this.item[i].style.cssText = this.visual[i] || "visibility: hidden");
    }
  }

  destory() {
    this.container.removeEventListener("touchstart", touchstartHandle);
    this.container.removeEventListener("touchmove", touchmoveHandle);
  }

}

// var mobileSwiper = function(selector) {
//   var x0, y0, hasmoved = 0, lock = 0;
//   var touchstartHandle = function(e) {
//     var 
//   },
//     touchmoveHandle = function(e) {
//       if (lock) return;
//       var touch = e.targetTouches[0], x = touch.pageX, y = touch.pageY, offsetX = x0 - x, offsetY = y0 - y;
//       // 阻止滚动
//       hasmoved || (hasmoved = 1, Math.abs(offsetX) > Math.abs(offsetY) && e.preventDefault());
//       if (offsetX <= -50) {
//         // 向右
//         console.log("向右");
//         this.queue.push(this.queue.shift());
        
//         lock = 1;
//         swap();
//       } else if (offsetX >= 50) {
//         // 向左
//         console.log("向左");
//         this.queue.unshift(this.queue.pop());
//         lock = 1;
//         swap();
//       }
//     }.bind(this),
//     swap = function(withoutTransition) {
//       var queue = [].concat(this.queue),
//         count = 0,
//         len = this.visual.length,
//         visual = new Array(len),
//         odd = 1;
//       // 提取前三个元素与后三个元素
//       while (count < 5 && queue.length > 0) {
//         visual[odd ? queue.shift() : queue.pop()] = css[count++] + (withoutTransition ? "" : transition);
//         odd = !odd; // 取反
//       }
//       // 对比一下数组 
//       for (var i = 0; i < len; ++i) {
//         visual[i] != this.visual[i] && (this.visual[i] = visual[i], this.item[i].style.cssText = this.visual[i] || "visibility: hidden");
//       }
//     }.bind(this),
//     // rem = function(px) {
//     //   return px / 40 + "rem";
//     // },
//     transition = "-webkit-transition: -webkit-transform .3s ease",
//     css = [
//       "z-index: 3; -webkit-transform: translate3d(0, 0, 10px) scale3d(1, 1, 1); visibility: visible;",
//       "z-index: 2; -webkit-transform: translate3d(88px, 0, 6px) scale3d(.8, .8, 1); visibility: visible;",
//       "z-index: 2; -webkit-transform: translate3d(-88px, 0, 6px) scale3d(.8, .8, 1); visibility: visible;",
//       "z-index: 1; -webkit-transform: translate3d(-64px, 0, 2px) scale3d(.667, .667, 1); visibility: visible;",
//       "z-index: 1; -webkit-transform: translate3d(64px, 0, 2px) scale3d(.667, .667, 1); visibility: visible;"
//     ];

//   this.init = function(list) {
//     this.container = list;
//     list.style["-webkit-transform-style"] = "preserve-3d";
//     this.item = list.querySelectorAll("li");
//     for (var i = 0; i < this.item.length; ++i) { this.item[i].style.visibility = "hidden" }
//     this.queue = function(len) { // 索引列表，用于处理切换的序号队列 
//       // 一个对应 item 的数组，记录 DOM 信息
//       var arr = [];
//       for (var i = 0; i < len; ++i) arr[i] = i;
//       return arr;
//     }(this.item.length);
//     this.visual = new Array(this.item.length); // 与 item 做对应的虚拟DOM
//     swap("without transition"); // 初始排版
//     if (this.item.length <= 1) return;
//     this.container.addEventListener("touchstart", touchstartHandle);
//     this.container.addEventListener("touchmove", touchmoveHandle);
//   }

//   this.destory = function() {
//     this.container.removeEventListener("touchstart", touchstartHandle);
//     this.container.removeEventListener("touchmove", touchmoveHandle);
//   }

//   // 默认 new 即初始化
//   var list = document.querySelector(selector);
//   list ? this.init(list) : console.log(selector + " undefined");
// }