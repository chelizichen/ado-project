<template>
  <el-dialog v-model="props.dialogFormVisible" :title="title" @closed="close">
    <el-form :model="props.val">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="props.val.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="电话" :label-width="formLabelWidth">
        <el-input v-model="props.val.phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="类型" :label-width="formLabelWidth">
        <el-input v-model="props.val.type" autocomplete="off" />
      </el-form-item>
      <el-form-item label="选项" :label-width="formLabelWidth">
        <el-input v-model="props.val.opt" autocomplete="off" />
      </el-form-item>
      <el-form-item label="描述" :label-width="formLabelWidth">
        <el-input v-model="props.val.desc" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否为新用户" :label-width="formLabelWidth">
        <el-input v-model="props.val.isold" autocomplete="off" />
      </el-form-item>
      <el-form-item label="预约时间" :label-width="formLabelWidth">
        <el-input v-model="props.val.date" autocomplete="off" />
      </el-form-item>
      <el-form-item label="成立日期" :label-width="formLabelWidth">
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
import { computed } from 'vue'
import { update } from '@/api/book';
import { book__table } from '@/type/book';

const props = defineProps<{
  dialogFormVisible: boolean,
  val: book__table,
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