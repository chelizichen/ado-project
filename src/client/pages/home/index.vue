<template>
  <div>
    <RouterView></RouterView>
  </div>
  
</template>

<script setup lang="ts">
import { hello } from '@/api/user';
import { onMounted } from 'vue';

onMounted(async () => {
  const data = await hello()
  console.log(data);
})
</script>

<style scoped>

</style>