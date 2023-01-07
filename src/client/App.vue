<template>
  <div>
    <el-container>
      <Header></Header>
      <el-main style="margin-top: 70px;padding: 0;">
        <router-view></router-view>
      </el-main>
      <!-- <Footer></Footer> -->
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
import "@/style.less"
// import Footer from '@/components/footer/index.vue'

</script>

<style scoped>

</style>