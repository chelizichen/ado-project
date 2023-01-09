import { AdoNodeController,Body,Controller,Get,Inject, Post, Query } from "ado-node";
import { ret } from "../../config/ret";
import { QueryId, Pagination } from "../../type/common";
import { order } from "./order.entity";
import { drugService, registerService } from './order.service';

@Controller("/order")
export class orderController extends AdoNodeController{
  // 挂号服务
  @Inject(registerService)
  registerService!: registerService
  
  // 药品服务
  @Inject(drugService)
  drugService!: drugService

  @Get("/register/one")
  async registerone(@Query() query:QueryId) {
    const { id } = query
    const data = await this.registerService.Order.getOneBy(id);
    return ret.success(data)
  }


  @Get("/register/list")
  async registerlist(@Query() query:Pagination){
    const data = await this.registerService.List(query)
    return ret.success(data)
  }

  @Post("/register/update")
  async registerupdate(@Body() body:order){
    const data = await this.registerService.update(body)
    return ret.success(data)
  }

  @Get("/register/del")
  async registerdel(@Query() query:QueryId){
    const data = await this.registerService.Order.delOneBy(query.id);
    return ret.success(data)
  }

  @Get("/drug/one")
  async drugone(@Query() query:QueryId) {
    const { id } = query
    const data = await this.drugService.Order.getOneBy(id);
    return ret.success(data)
  }


  @Get("/drug/list")
  async druglist(@Query() query:Pagination){
    const data = await this.drugService.List(query)
    return ret.success(data)
  }

  @Post("/drug/update")
  async drugupdate(@Body() body:order){
    const data = await this.drugService.update(body)
    return ret.success(data)
  }

  @Get("/drug/del")
  async drugdel(@Query() query:QueryId){
    const data = await this.drugService.Order.delOneBy(query.id);
    return ret.success(data)
  }
}