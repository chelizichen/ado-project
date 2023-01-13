<template>
  <div :style="bg_class">
    <div class="top">
      <img :src="Logo" class="logo" />
      <div class="zlys">知了医生预约界面</div>
    </div>
    <div class="form">
      <el-form :model="form" label-width="120px">
        <el-form-item label="您的姓名">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="您的电话">
          <el-input v-model="form.phone" />
        </el-form-item>
        <el-form-item label="预约类型">
          <el-select v-model="form.type" placeholder="请选择">
            <el-option label="挂号" value="1" />
            <el-option label="急诊" value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="预约日期">
          <el-col :span="11">
            <el-date-picker
              v-model="form.date"
              type="date"
              placeholder="选择日期"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="是否为老用户">
          <el-switch v-model="form.isold" />
        </el-form-item>
        <el-form-item label="其他选项">
          <el-checkbox-group v-model="form.opt">
            <el-checkbox label="尽快得到回复" name="type" />
            <br />
            <el-checkbox label="回复以短信形式" name="type" />
            <br />
            <el-checkbox label="需要高级专家" name="type" />
            <el-checkbox label="需要专车接送" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from "@/assets/Logo.jpeg";
import { reactive, onMounted, ref } from "vue";
let bg_class = ref({
  backgroundColor: "aliceblue",
  width: "100%",
  height:""
});
const form = reactive({
  name: "",
  isold: false,
  date: "",
  type: "",
  opt: [],
  desc: "",
  phone: "",
});

const onSubmit = () => {
  console.log(form);
};
onMounted(() => {
  bg_class.value.height = window.outerHeight+"px"
});
</script>

<style scoped lang="less">

  .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20%;
    box-sizing: border-box;
    background-color: rgb(244, 244, 250);
    border-bottom: 3px rgb(169, 169, 173) dashed;
    margin-bottom: 20px;
    .logo {
      width: 20%;
      height: 20%;
      border-radius: 50%;
    }
    .zlys {
      color: rgb(61, 183, 187);
      font-weight: 900;
      font-size: large;
    }
  }
  .form {
    padding: 0 10% 0 5%;
    box-sizing: border-box;
  }
</style>
