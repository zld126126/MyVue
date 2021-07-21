<template>
  <div>{{ msg }}</div>
  <div id="threejs1">第一个ThreeJS程序: 按下F12 请看"控制台"</div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Hello",
    props: {
      msg: String,
    },
  });

  // 测试threejs是否安装完成
  import * as THREE from "three";
  console.log("ThreeJS:",THREE);

</script>

<style scoped>
</style>
