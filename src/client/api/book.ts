import { update_book, add_book } from "@/type/book";
import { Pagination, QueryId } from "@/type/common";
import request from "@/utils/axios";

export function getOne(params: QueryId) {
  return request({
    url: "book/one",
    params,
  });
}

export function list(params: Pagination) {
  return request({
    url: "book/list",
    method: "get",
    params,
  });
}

export function del(params: QueryId) {
  return request({
    url: "book/del",
    method: "get",
    params,
  });
}

export function update(data: update_book | add_book) {
  return request({
    url: "book/update",
    method: "post",
    data,
  });
}
