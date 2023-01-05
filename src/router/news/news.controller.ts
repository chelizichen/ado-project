import { AdoNodeController,Controller,Get,Inject, Query } from "ado-node";
import { newsService } from './news.service';
import { Pagination } from "../../type/common";
import { ret } from "../../config/ret";

@Controller("/news")
export class newsController extends AdoNodeController{
  @Inject(newsService)
  newsService!: newsService
  

  @Get("/list")
  async list(@Query() query: Pagination) {
    const { page,size} = query;
    const data = await this.newsService.News.getList(String(page), String(size));
    return ret.success(data)
  }

}