<template>
  <!-- 选项 -->
  <div>
    <div class="search">
      <el-input v-model="pagination.keyword"  placeholder="搜索"/>
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
      <el-table-column prop="o_user_id" label="用户ID" width="180" />
      <el-table-column prop="o_doctor_id" label="医生ID" />
      <el-table-column prop="o_order_id" label="订单ID" />
      <el-table-column prop="o_step" label="时段" />
      <el-table-column prop="o_sort" label="排号" />
      <el-table-column prop="o_cost" label="花费" />
      <el-table-column prop="o_is_pay" label="支付情况" />
      <el-table-column prop="o_status" label="挂号状态" />
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
  <Edit :dialogFormVisible="dialogFormVisible" :val="dialogVal" @close="handle_close" @success="handle_success"
    :isAdd="state.isAdd"></Edit>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { list, del } from '@/api/order';
import { order__table } from '@/type/order';
import { Pagination } from '@/type/common.d'
import Edit from './edit.vue'
import _ from 'lodash'
import { ElNotification } from 'element-plus';
import { pagination_options } from "@/utils/options"
const state = reactive({
  list: <Array<order__table>>[],
  total: 0,
  isAdd: false,

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

async function handle_del(item: order__table) {
  const data = await del({ id: item.id })
  // @ts-ignore
  if (data.code == 0) {
    //删除成功函数    
    init()
  }

}

async function init() {
  const { data } = await list(pagination.value)
  const { data: _list, total } = data
  state.list = _list
  state.total = total;
}

onMounted(() => {
  init()
})

</script>

<style scoped lang="less">
.search {
  width: 400px;
  height: 40px;
  display: flex;
  align-items: center;
}

.pagination {
  float: right;
}
</style>