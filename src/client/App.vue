<template>
  <div>
    <div v-if="useDeviceStore().isMobile">
      <router-view></router-view>
    </div>
    <el-container v-if="!useDeviceStore().isMobile">
      <Header></Header>
      <el-main style="margin-top: 70px; padding: 0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/header/index.vue";
import { onBeforeMount, watch } from "vue";
import useDeviceStore from "@/store/device";
import router from "./router";
function judgeDevice() {
  const flag = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  if (flag && flag.length > 0) {
    useDeviceStore().setIsMobel(true);
  }
}

watch(
  useDeviceStore(),
  function (val) {
    if (val.isMobile) {
      router.push("/device");
    } else {
      router.push("/home");
    }
  },
  {
    immediate: true,
  }
);

onBeforeMount(() => {
  judgeDevice();
});
</script>

<style scoped></style>
