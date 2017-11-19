<template>
  <ul id="selector" ref="selector2">
    <li>
      <img src="//jdc.jd.com/img/216x264?color=111&text=1">
    </li>
    <li>
      <img src="//jdc.jd.com/img/216x264?color=f00&text=2">
    </li>
    <li>
      <img src="//jdc.jd.com/img/216x264?color=ff0&text=3">
    </li>
    <li>
      <img src="//jdc.jd.com/img/216x264?color=f0f&text=4">
    </li>
    <li>
      <img src="//jdc.jd.com/img/216x264?color=333&text=5">
    </li>
    <!-- <li>
      <img src="//jdc.jd.com/img/216x264?color=999&text=6">
    </li>
    <li>
      <img src="//jdc.jd.com/img/216x264?color=999&text=7">
    </li>
    <li>
      <img src="//jdc.jd.com/img/216x264?color=999&text=8">
    </li> -->
  </ul>
</template>

<script>
class Swiper {
  constructor(selector) {
    this.x0 = ''
    this.y0 = ''
    this.hasmoved = 0
    this.lock = 0
    this.queue = []
    this.transition = "-webkit-transition: -webkit-transform .3s ease",
    this.css = [
      "z-index: 3; -webkit-transform: translate3d(0, 0, 10px) scale3d(1, 1, 1); visibility: visible;",
      "z-index: 2; -webkit-transform: translate3d(88px, 0, 6px) scale3d(.8, .8, 1); visibility: visible;",
      "z-index: 2; -webkit-transform: translate3d(-88px, 0, 6px) scale3d(.8, .8, 1); visibility: visible;",
      "z-index: 1; -webkit-transform: translate3d(-164px, 0, 2px) scale3d(.667, .667, 1); visibility: visible;",
      "z-index: 1; -webkit-transform: translate3d(164px, 0, 2px) scale3d(.667, .667, 1); visibility: visible;"
    ];

    this.list = document.querySelector(selector);
    this.list ? this.init(this.list) : console.log(selector + " undefined");
  }

  init(list) {
    this.container = list;
    list.style["-webkit-transform-style"] = "preserve-3d";
    this.item = list.querySelectorAll("li");
    const arr = [];
    for (let i = 0; i < this.item.length; ++i) {
      this.item[i].style.visibility = "hidden"
      arr[i] = i
    }
    this.queue = arr
    this.visual = new Array(this.item.length); // 与 item 做对应的虚拟DOM
    this.swap("without transition"); // 初始排版
    if (this.item.length <= 1) return;
    this.container.addEventListener("touchstart", this.touchstartHandle);
    this.container.addEventListener("touchmove", this.touchmoveHandle);
  }

  touchstartHandle = (e) => {
    const touch = e.targetTouches[0],
          x = touch.pageX,
          y = touch.pageY
    this.x0 = x, this.y0 = y, this.hasmoved = 0, this.lock = 0
  }

  touchmoveHandle = (e) => {
    if (this.lock) return
    const touch = e.targetTouches[0],
          x = touch.pageX,
          y = touch.pageY,
          offsetX = this.x0 - x,
          offsetY = this.y0 - y
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
    let queue = [...this.queue],
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
export default {
  mounted() {
    console.log(this.$refs.selector2)
    console.log(document.querySelector("#selector"))
    new Swiper("#selector")
  }
}
</script>

<style scoped>
ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}

ul {
  position: relative;
  width: 100%;
  height: 60px;

  /* margin: 1.3rem auto; */
}

li {
  position: absolute;
  width: 140px;
  height: 160px;
  left: 40%;
  /* margin-left: -1rem; */
}

li img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.15rem;
}
</style>

