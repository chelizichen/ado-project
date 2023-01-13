import { AdoNodeController, Body, Controller, Get, Inject, Post, Query } from "ado-node";
import { bookService } from './book.service';
import { book } from "./book.entity";
import { ret } from "../../config/ret";
import { QueryId, Pagination } from "../../type/common";

@Controller("/book")
export class bookController extends AdoNodeController {
  @Inject(bookService)
  bookService!: bookService;

  @Get("/one")
  async one(@Query() query: QueryId) {
    const { id } = query;
    const data = await this.bookService.Book.getOneBy(id);
    return ret.success(data);
  }

  @Get("/list")
  async list(@Query() query: Pagination) {
    const data = await this.bookService.List(query);
    return ret.success(data);
  }

  @Post("/update")
  async update(@Body() body: book) {
    const data = await this.bookService.update(body);
    return ret.success(data);
  }

  @Get("/del")
  async del(@Query() query: QueryId) {
    const data = await this.bookService.Book.delOneBy(query.id);
    return ret.success(data);
  }
}