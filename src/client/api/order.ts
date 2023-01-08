import { Pagination, QueryId } from "@/type/common";
import { add_order, update_order } from "@/type/order";
import request from "@/utils/axios";

export function getOne(params: QueryId) {
  return request({
    url: "order/one",
    params,
  });
}

export function list(params: Pagination) {
  return request({
    url: "order/list",
    method: "get",
    params,
  });
}

export function del(params: QueryId) {
  return request({
    url: "order/del",
    method: "get",
    params,
  });
}

export function update(data: add_order|update_order) {
  return request({
    url: "order/update",
    method: "post",
    data,
  });
}