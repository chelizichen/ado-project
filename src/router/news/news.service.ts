import { Collect, Inject } from "ado-node";
import { news } from "./news.entity";

@Collect()
export class newsService{
  @Inject(news)
  News!: news
  
}