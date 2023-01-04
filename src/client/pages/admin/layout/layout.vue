<template>
  <div class="common-layout">
    <el-container>
      <el-container>
        <el-aside width="200px">
          <AdminLeft></AdminLeft>
        </el-aside>
        <el-main>
          <slot></slot>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import AdminLeft from '@/pages/admin/layout/left.vue'
</script>

<style scoped>

</style>