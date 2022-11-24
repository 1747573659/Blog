<script setup lang="ts">
import renderCube from '@/utils/three';
import { onMounted } from 'vue';

onMounted(() => {
  renderCube()
})

</script>

<template>
  <p>这是个人主页~</p>
  <div id="three_area"></div>
</template>

<style scoped>
#three_area {
  width: 80vw;
  height: 80vh;
}
</style>
