import { Pagination, QueryId } from "@/type/common";
import { update_drug,add_drug } from "@/type/drug";
import { add_order, update_order } from "@/type/order";
import request from "@/utils/axios";

// 挂号后药品订单
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

export function update(data: add_order | update_order) {
  return request({
    url: "order/drug/update",
    method: "post",
    data,
  });
}


export function drug_getOne(params: QueryId) {
  return request({
    url: "drug/one",
    params,
  });
}

export function drug_list(params: Pagination) {
  return request({
    url: "drug/list",
    method: "get",
    params,
  });
}

export function drug_del(params: QueryId) {
  return request({
    url: "drug/del",
    method: "get",
    params,
  });
}

export function drug_update(data: add_drug | update_drug) {
  return request({
    url: "order/drug/update",
    method: "post",
    data,
  });
}

