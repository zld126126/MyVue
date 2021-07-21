<template>
  <div>{{ msg }}</div>
  <div id="">第一个pixi程序: 按下F12 请看"控制台"</div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Hello",
    props: {
      msg: String,
    },
  });
  // var pixi = require('pixi');
  import * as pixi from "pixi.js";

  // 测试pixi是否安装完成
  let type = "WebGL";
  if (!pixi.utils.isWebGLSupported()) {
    type = "canvas";
  }
  pixi.utils.sayHello(type);
</script>

<style scoped>
</style>
