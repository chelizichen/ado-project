import { Pagination, QueryId } from "@/type/common";
import { add_doctor, update_doctor } from "@/type/doctor";
import request from "@/utils/axios";

export function getOne(params: QueryId) {
  return request({
    url: "doctor/one",
    params,
  });
}

export function list(params: Pagination) {
  return request({
    url: "doctor/list",
    method: "get",
    params,
  });
}

export function del(params: QueryId) {
  return request({
    url: "doctor/del",
    method: "get",
    params,
  });
}

export function update(data: update_doctor|add_doctor) {
  return request({
    url: "doctor/update",
    method: "post",
    data,
  });
}