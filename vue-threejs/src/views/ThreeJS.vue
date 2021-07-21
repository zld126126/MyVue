<template>
  <h2 class="colorful">极简ThreeJS</h2>
  <div id="threejs2"></div>
</template>

<script>
//声明一些全局变量
import * as THREE from "three";
var renderer, camera, scene, geometry, material, mesh;
export default {
  name: "threejs2",
  props: {},
  data() {
    return {};
  },
  mounted() {
    this.initState();
  },
  methods: {
    initState() {
      this.initRenderer();
      this.initScene();
      this.initCamera();
      this.initMesh();
      this.animate();
    },
    //初始化渲染器
    initRenderer() {
      renderer = new THREE.WebGLRenderer();
      //实例化渲染器
      renderer.setSize(window.innerWidth, window.innerHeight);
      //设置宽和高
      document.getElementById("threejs2").appendChild(renderer.domElement);
      //添加到dom
    },
    //初始化场景
    initScene() {
      scene = new THREE.Scene();
      //实例化场景
    },
    //初始化相机
    initCamera() {
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        200
      ); //实例化相机
      camera.position.set(0, 0, 15);
    },
    //创建模型
    initMesh() {
      geometry = new THREE.BoxGeometry(2, 2, 2);
      //创建几何体
      material = new THREE.MeshNormalMaterial();
      //创建材质
      mesh = new THREE.Mesh(geometry, material);
      //创建网格
      scene.add(mesh);
      //将网格添加到场景
    },
    //运行动画
    animate() {
      requestAnimationFrame(this.animate);
      //循环调用函数
      mesh.rotation.x += 0.01;
      //每帧网格模型的沿x轴旋转0.01弧度
      mesh.rotation.y += 0.02;
      //每帧网格模型的沿y轴旋转0.02弧度
      renderer.render(scene, camera);
      //渲染界面
    },
  },
};
</script>
<style scoped>
.colorful {
  color: #ff7300;
}
</style>
