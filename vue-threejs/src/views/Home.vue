<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Hello msg="Welcome to TS(Vue) + JS(Three)"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hello from '@/components/Hello.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Hello,
  },
});
</script>
