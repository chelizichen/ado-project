import { Pagination, QueryId } from "@/type/common";
import { menu__table, update_menu, add_menu } from "@/type/menu";
import request from "@/utils/axios";

export function ApiRouterMenu(params: { permission: string }) {
  return request({
    url: "menu/router",
    params,
  })
}

export function list(params: Pagination) {
  return request({
    url: "menu/list",
    params,
  })
} 


export function del(params: QueryId) {
  return request({
    url: "menu/del",
    params,
  });
}

export function update(data: update_menu | add_menu) {
  return request({
    url: "menu/update",
    method: "post",
    data,
  });
}