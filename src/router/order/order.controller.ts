import { AdoNodeController,Controller,Get,Inject } from "ado-node";
import { orderService } from './order.service';

@Controller("/order")
export class orderController extends AdoNodeController{
  @Inject(orderService)
  orderService!: orderService
  

  @Get("/test")
  hello() {
    return {
      msg:"ok",
      code:0,
      data:"hello world"
    }
  }

}