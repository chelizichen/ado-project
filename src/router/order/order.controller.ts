import { AdoNodeController,Body,Controller,Get,Inject, Post, Query } from "ado-node";
import { ret } from "../../config/ret";
import { QueryId, Pagination } from "../../type/common";
import { order } from "./order.entity";
import { orderService } from './order.service';

@Controller("/order")
export class orderController extends AdoNodeController{
  @Inject(orderService)
  orderService!: orderService


  @Get("/one")
  async one(@Query() query:QueryId) {
    const { id } = query
    const data = await this.orderService.Order.getOneBy(id);
    return ret.success(data)
  }


  @Get("/list")
  async list(@Query() query:Pagination){
    const data = await this.orderService.List(query)
    return ret.success(data)
  }

  @Post("/update")
  async update(@Body() body:order){
    const data = await this.orderService.update(body)
    return ret.success(data)
  }

  @Get("/del")
  async del(@Query() query:QueryId){
    const data = await this.orderService.Order.delOneBy(query.id);
    return ret.success(data)
  }
}