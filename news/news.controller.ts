import { AdoNodeController,Controller,Get,Inject } from "ado-node";
import { newsService } from './news.service';

@Controller("/news")
export class newsController extends AdoNodeController{
  @Inject(newsService)
  newsService!: newsService
  

  @Get("/test")
  hello() {
    return {
      msg:"ok",
      code:0,
      data:"hello world"
    }
  }

}