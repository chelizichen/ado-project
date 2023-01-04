<template>
  <el-menu class="el-menu-vertical-demo" default-active="2" @select="handleSelect">
    <el-sub-menu v-for="item in Items" :index="item.path">
      <template #title>
        <el-icon>
          <location />
        </el-icon>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item v-for="child in item.children" :index="item.path + '/' + child.path">{{ child.name }}</el-menu-item>
    </el-sub-menu>
  </el-menu>

</template>

<script setup lang="ts">
import {
  Location,
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
import useMenuStore from '@/store/menu';
import { computed } from 'vue'
const router = useRouter()


const menuStore = useMenuStore()
const Items = computed(() => menuStore.menu)

const handleSelect = (key: string, _keyPath: string[]) => {
    router.push(key)
}

</script>


<style scoped lang="less">

</style>
