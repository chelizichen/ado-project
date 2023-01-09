import { Pagination, QueryId } from "@/type/common";
import { add_order, update_order } from "@/type/order";
import request from "@/utils/axios";

// 挂号订单
export function getOne(params: QueryId) {
    return request({
      url: "order/drug/one",
      params,
    });
  }
  
  export function list(params: Pagination) {
    return request({
      url: "order/drug/list",
      method: "get",
      params,
    });
  }
  
  export function del(params: QueryId) {
    return request({
      url: "order/drug/del",
      method: "get",
      params,
    });
  }
  
  export function update(data: add_order|update_order) {
    return request({
      url: "order/drug/update",
      method: "post",
      data,
    });
  }