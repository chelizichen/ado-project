<template>
  <el-dialog v-model="props.dialogFormVisible" :title="title" @closed="close">
    <el-form :model="props.val">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="props.val.u_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密码" :label-width="formLabelWidth">
        <el-input v-model="props.val.u_password" autocomplete="off" />
      </el-form-item>
      <el-form-item label="权限" :label-width="formLabelWidth">
        <el-input v-model="props.val.u_permission" autocomplete="off" />
      </el-form-item>
      <el-form-item label="电话号码" :label-width="formLabelWidth">
        <el-input v-model="props.val.u_phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="电子邮箱" :label-width="formLabelWidth">
        <el-input v-model="props.val.u_email" autocomplete="off" />
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
import { reactive, ref, watch,computed } from 'vue'
import { update } from '@/api/user';
import { user } from '@/type/user';

const props = defineProps<{
  dialogFormVisible: boolean,
  val: user,
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