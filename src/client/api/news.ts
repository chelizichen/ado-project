import { Pagination, QueryId } from "@/type/common";
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
