<template>
  <el-dialog v-model="props.dialogFormVisible" :title="title" @closed="close">
    <el-form :model="props.val">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="年龄" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_age" autocomplete="off" />
      </el-form-item>
      <el-form-item label="毕业学校" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_university" autocomplete="off" />
      </el-form-item>
      <el-form-item label="学位学历" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_education" autocomplete="off" />
      </el-form-item>
      <el-form-item label="专业" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_major" autocomplete="off" />
      </el-form-item>
      <el-form-item label="专业" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_major" autocomplete="off" />
      </el-form-item>
      <el-form-item label="职称" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_level" autocomplete="off" />
      </el-form-item>
      <el-form-item label="医生介绍" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_intro" autocomplete="off" />
      </el-form-item>
      <el-form-item label="医生照片" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_photo" autocomplete="off" />
      </el-form-item>
      <el-form-item label="挂号费用" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_order_money" autocomplete="off" />
      </el-form-item>
      <el-form-item label="开始工作时间" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_work_date" autocomplete="off" />
      </el-form-item>
      <el-form-item label="科室code" :label-width="formLabelWidth">
        <el-input v-model="props.val.d_depart_code" autocomplete="off" />
      </el-form-item>
      <el-form-item label="入职时间" :label-width="formLabelWidth">
        <el-input v-model="props.val.createTime" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="submit">
          修改
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import {  computed } from 'vue'
import { update } from '@/api/doctor';
import { doctor__table } from '@/type/doctor';

const props = defineProps<{
  dialogFormVisible: boolean,
  val: doctor__table,
  isAdd:boolean
}>()

const title = computed(()=>props.isAdd?"添加用户":"修改用户")

const formLabelWidth = '140px'

async function submit() {
  const data = await update(props.val)
  // @ts-ignore
  if (data.code == 0) {
    emit("success", "操作成功")
    emit("close")
  }
  console.log(data);
  
}

const emit = defineEmits(["close","success"])

function close() {
  emit("close")
}


</script>

<style scoped>

</style>