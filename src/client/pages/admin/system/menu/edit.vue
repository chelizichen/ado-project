<template>
  <el-dialog v-model="props.dialogFormVisible" :title="title" @closed="close">
    <el-form :model="props.val">
      <el-form-item label="菜单名称" :label-width="formLabelWidth">
        <el-input v-model="props.val.m_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="菜单权限" :label-width="formLabelWidth">
        <el-input v-model="props.val.m_permission" autocomplete="off" />
      </el-form-item>
      <el-form-item label="是否为根组件" :label-width="formLabelWidth">
        <el-input v-model="props.val.m_is_root" autocomplete="off" />
      </el-form-item>
      <el-form-item label="根组件ID" :label-width="formLabelWidth">
        <el-input v-model="props.val.m_root_id" autocomplete="off" />
      </el-form-item>
      <el-form-item label="组件名" :label-width="formLabelWidth">
        <el-input v-model="props.val.m_path" autocomplete="off" />
      </el-form-item>
      <el-form-item label="组件路径" :label-width="formLabelWidth">
        <el-input v-model="props.val.m_component" autocomplete="off" />
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
import { update } from '@/api/menu';
import { menu__table } from '@/type/menu';

const props = defineProps<{
  dialogFormVisible: boolean,
  val: menu__table,
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