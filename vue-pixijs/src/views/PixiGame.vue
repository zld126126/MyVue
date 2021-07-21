<template>
  <h2 class="colorful">请点击小熊!!!</h2>
  <div id="pixi2"></div>
</template>

<script>
// var pixi = require('pixi');
import * as PIXI from "pixi.js";

export default {
  name: "pixi2",
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.initState();
  },
  methods: {
    initState() {
      let app = new PIXI.Application({
        width: 800, // default: 800 宽度
        height: 600, // default: 600 高度
        antialias: true, // default: false 反锯齿
        transparent: false, // default: false 透明度
        resolution: 1, // default: 1 分辨率
        backgroundAlpha: 0, // 设置背景颜色透明度   0是透明
      });
      app.renderer.backgroundColor = 0x262626; // 设置canvas背景颜色

      console.log(app);
      // 将创建好的canvas添加到元素当中去
      document.getElementById("pixi2").appendChild(app.view);

      // TODO 路径暂时写死
      let bear = new PIXI.Sprite.from("http://localhost:8080/images/bunny.png");
      bear.x = 400;
      bear.y = 300;
      app.stage.addChild(bear);

      app.stage.interactive = true;
      // 小熊点击事件
      app.stage.on("pointerdown", () => {
        bear.scale.x *= 1.25;
        bear.scale.y *= 1.25;
      });
    },
  },
};
</script>
<style scoped>
.colorful {
  color: #ff0000;
}
</style>
