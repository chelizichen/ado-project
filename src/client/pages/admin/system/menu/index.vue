<template>
  <!-- 选项 -->
  <div>
    <div class="search">
      <el-input v-model="pagination.keyword" placeholder="搜索" />
      <el-select v-model="pagination.size" placeholder="Select">
        <el-option v-for="item in pagination_options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-button type="primary" size="middle" @click="list(pagination)">搜索</el-button>
      <el-button type="primary" size="middle" @click="handle_add">添加</el-button>
    </div>
  </div>
  <!-- 表格 -->
  <div>
    <el-table :data="state.list" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180" />
      <el-table-column prop="m_name" label="用户名" width="180" />
      <el-table-column prop="m_permission" label="密码" />
      <el-table-column prop="m_is_root" label="电子邮箱" />
      <el-table-column prop="m_root_id" label="电话" />
      <el-table-column prop="m_path" label="权限" />
      <el-table-column prop="m_component" label="权限" />
      <el-table-column prop="createTime" label="创建时间" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="small" @click="handle_edit(scope.row)">编辑</el-button>
          <el-popconfirm title="Are you sure to delete this?" @confirm="handle_del(scope.row)">
            <template #reference>
              <el-button type="danger" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination background layout="prev, pager, next" :total="state.total" />
    </div>
  </div>
  <Edit :dialogFormVisible="dialogFormVisible" :val="dialogVal" @close="handle_close" @success="handle_success" :isAdd="state.isAdd"></Edit>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { list, del } from '@/api/menu';
import { menu__table } from '@/type/menu';
import { Pagination } from '@/type/common.d'
import Edit from './edit.vue'
import _ from 'lodash'
import { ElNotification } from 'element-plus';
import { pagination_options } from "@/utils/options"
const state = reactive({
  list: <Array<menu__table>>[],
  total:0,
    isAdd:false,

})

const pagination = ref<Pagination>({
  size: pagination_options[0].value,
  keyword: "",
  page: 0
})

const dialogFormVisible = ref(false)
const dialogVal = ref<any>()
function handle_close() {
  dialogFormVisible.value = false
}
function handle_success(args: any) {
  // Notification
  ElNotification({
    title: "通知",
    message: args
  })
  init()
}
function handle_edit(item: any) {
  state.isAdd = false
  dialogFormVisible.value = true
  const newItem = _.cloneDeep(item)
  dialogVal.value = newItem
}

function handle_add() {
  state.isAdd = true
  dialogFormVisible.value = true
  dialogVal.value = {}
}

async function handle_del(item: menu__table) {
  const data = await del({ id: item.id })
  // @ts-ignore
  if (data.code == 0) {
    //删除成功函数    
    init()
  }

}

async function init() {
  const {data} = await list(pagination.value)
  const {data:_list,total} = data
  state.list = _list
  state.total = total;
}

onMounted(() => {
  init()
})

</script>

<style scoped lang="less">
.search{
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
}
.pagination{
  float: right;
}
</style>