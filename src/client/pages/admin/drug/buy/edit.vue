<template>
  <el-dialog v-model="props.dialogFormVisible" :title="title" @closed="close">
    <el-form :model="props.val">
      <el-form-item label="用户ID" :label-width="formLabelWidth">
        <el-input v-model="props.val.o_user_id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="医生ID" :label-width="formLabelWidth">
        <el-input v-model="props.val.o_doctor_id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="订单ID" :label-width="formLabelWidth">
        <el-input v-model="props.val.o_order_id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="时段" :label-width="formLabelWidth">
        <el-input v-model="props.val.o_step" autocomplete="off" />
      </el-form-item>
      <el-form-item label="排号" :label-width="formLabelWidth">
        <el-input v-model="props.val.o_sort" autocomplete="off" />
      </el-form-item>
      <el-form-item label="花费" :label-width="formLabelWidth">
        <el-input v-model="props.val.o_cost" autocomplete="off" />
      </el-form-item>
      <el-form-item label="支付情况" :label-width="formLabelWidth">
        <el-input v-model="props.val.o_is_pay" autocomplete="off" />
      </el-form-item>
      <el-form-item label="挂号状态" :label-width="formLabelWidth">
        <el-input v-model="props.val.o_status" autocomplete="off" />
      </el-form-item>
      <el-form-item label="创建时间" :label-width="formLabelWidth">
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
import { update } from '@/api/order';
import { order__table } from '@/type/order';

const props = defineProps<{
  dialogFormVisible: boolean,
  val: order__table,
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