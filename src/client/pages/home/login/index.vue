<template>
  <div class="layout">
    <el-carousel indicator-position="outside" class="layout-left">
      <el-carousel-item class="item">
        <div class="bg">
          <img :src="bg1" class="bg-pic" />
          <div class="bg-content">
            知了医生——智慧物业管理平台
            <br />
            <i class="bg-intro">
              知了医生是一套成熟的智慧社区物业管理平台，国内第一家微GIS图形化开发平台，对物业小区、门面房商铺、广告位、停车场和车位等物业的信息化综合管理;实现从物业住户资料、收费、报修、投诉和办公OA等功能；软件具备电脑端和移动手机端APP，具备在线缴费、在线报修投诉功能
            </i>
          </div>
        </div>
      </el-carousel-item>
      <el-carousel-item class="item">
        <div class="bg">
          <img :src="bg2" class="bg-pic" />
          <div class="bg-content">
            知了医生——广受好评的业主服务平台
            <br />
            <i class="bg-intro">
              知了医生是一套成熟的智慧社区物业管理平台，国内第一家微GIS图形化开发平台，对物业小区、门面房商铺、广告位、停车场和车位等物业的信息化综合管理;实现从物业住户资料、收费、报修、投诉和办公OA等功能；软件具备电脑端和移动手机端APP，具备在线缴费、在线报修投诉功能
            </i>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>

    <el-form :model="form" class="layout-right">
      <el-form-item label="手机号" label-width="120px">
        <el-input v-model="form.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" label-width="120px">
        <el-input v-model="form.password" autocomplete="off" />
      </el-form-item>
      <div>
        <el-button @click="toLogin">登陆</el-button>
        <el-button @click="toRegistry">注册</el-button>
      </div>
    </el-form>
  </div>

</template>

<script setup lang="ts">
import {  reactive } from 'vue'
import { useRouter } from 'vue-router';
import { login } from '@/api/user';

import bg1 from "@/assets/bg/bg1.png";
import bg2 from "@/assets/bg/bg2.png";

const router = useRouter()

const form = reactive({
  phone: '',
  password:"",
})

const toRegistry = () => {
  router.push("/home/registry")
}

const toLogin = async () => {
  const data = await login(form)
  console.log(data);
  const user = data.data
  if (user instanceof Array && user.length > 0) {
    localStorage.setItem("userId", user[0].id)
    router.replace("/home")
  } else {
    alert("登陆失败")
  }
}

</script>


<style scoped lang="less">
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.layout{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.layout-left{
  width: 70%;
  height: 500px;
}
.layout-right{
  background-color: #f1f3f6;
  width: 30%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.item{
  height: 500px;
}

.bg {
  width: 100%;
  height: 500px;

  .bg-pic {
    width: 100%;
    height: 500px;
    position: absolute;
  }

  .bg-content {
    z-index: 999;
    font-size: 30px;
    left: 15%;
    top: 30%;
    width: 700px;
    position: absolute;

    .bg-intro {
      font-size: 12px;
      color: antiquewhite;
    }
  }
}
</style>
