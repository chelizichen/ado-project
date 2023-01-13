import { Collect, Inject } from "ado-node";
import { book } from "./book.entity";
import { Pagination } from "../../type/common";

@Collect()
export class bookService {
  @Inject(book)
  Book!: book;

  async List(query: Pagination) {
    let { keyword, page, size } = query;
    let sql = "";
    let data: any;
    page = page * size;
    
    let total: any;
    if (keyword) {
      keyword = "%" + keyword + "%";
      sql = `select * from book where name like ? limit ?,?`;
      let count = `select count(*) as total from book where name like ?`;
      data = await this.Book.getMany(sql, [
        keyword,
        Number(page),
        Number(size),
      ]);
      total = await this.Book.getMany(count, [keyword]);
    } else {
      sql = "select * from book limit ?,?";
      let count = `select count(*) as total from book`;
      data = await this.Book.getMany(sql, [Number(page), Number(size)]);
      total = await this.Book.getMany(count);
    }
    return { data, total: total[0]["total"] };
  }
  async update(book: book) {
    const { id } = book;
    let data: any;
    if (id) {
      data = await this.Book.update(book);
    } else {
      data = await this.Book.save(book);
    }
    return data;
  }
}