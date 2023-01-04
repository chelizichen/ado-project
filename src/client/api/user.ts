import { Pagination, QueryId } from "@/type/common";
import { add_user, update_user } from "@/type/user";
import request from "@/utils/axios";


export function getOne(params: QueryId) {
  return request({
    url: "user/one",
    method: "get",
    params,
  });
}

export function list(params: Pagination) {
  return request({
    url: "user/list",
    method: "get",
    params,
  });
}

export function hello() {
  return request({
    'url':"user/test"
  })
}

export function del(params: QueryId) {
  return request({
    url: "user/del",
    method: "get",
    params,
  });
}

export function update(data: update_user | add_user) {
  return request({
    url: "user/update",
    method: "post",
    data
  });
}

export function login(data: { phone: string; password: string }) {
  return request({
    url: "user/login",
    method: "post",
    data,
  });
}