<template>
  <h2 class="colorful">极简Pixi画布</h2>
  <div id="pixi1"></div>
</template>

<script>
// var pixi = require('pixi');
import * as pixi from "pixi.js";

export default {
  name: "pixi1",
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.initState();
  },
  methods: {
    initState() {
      let app = new pixi.Application({
        width: 300, // default: 800 宽度
        height: 300, // default: 600 高度
        antialias: true, // default: false 反锯齿
        transparent: false, // default: false 透明度
        resolution: 1, // default: 1 分辨率
        backgroundAlpha: 0, // 设置背景颜色透明度   0是透明
      });
      // 设置canvas背景颜色
      app.renderer.backgroundColor = 0xC0C0C0;

      console.log(app);
      // 将创建好的canvas添加到元素当中去
      document.getElementById("pixi1").appendChild(app.view);
    },
  },
};
</script>
<style scoped>
.colorful{color:#ff7300; }
</style>
