import { AdoNodeController,Body,Controller,Get,Inject, Post, Query } from "ado-node";
import { ret } from "../../config/ret";
import { QueryId, Pagination } from "../../type/common";
import { drug } from "./drug.entity";
import { drugService } from './drug.service';

@Controller("/drug")
export class drugController extends AdoNodeController{
  @Inject(drugService)
  drugService!: drugService
  

  @Get("/one")
  async one(@Query() query:QueryId) {
    const { id } = query
    const data = await this.drugService.Drug.getOneBy(id);
    return ret.success(data)
  }


  @Get("/list")
  async list(@Query() query:Pagination){
    const data = await this.drugService.List(query)
    return ret.success(data)
  }

  @Post("/update")
  async update(@Body() body:drug){
    const data = await this.drugService.update(body)
    return ret.success(data)
  }

  @Get("/del")
  async del(@Query() query:QueryId){
    const data = await this.drugService.Drug.delOneBy(query.id);
    return ret.success(data)
  }

}