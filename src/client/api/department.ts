import { Pagination, QueryId } from "@/type/common";
import { add_department } from "@/type/department";
import request from "@/utils/axios";

export function getOne(params: QueryId) {
  return request({
    url: "department/one",
    params,
  });
}

export function list(params: Pagination) {
  return request({
    url: "department/list",
    method: "get",
    params,
  });
}

export function del(params: QueryId) {
  return request({
    url: "department/del",
    method: "get",
    params,
  });
}

export function update(data: add_department|add_department) {
  return request({
    url: "department/update",
    method: "post",
    data,
  });
}