import { AdoNodeController,Controller,Get,Inject } from "ado-node";
import { menuService } from './menu.service';

@Controller("/menu")
export class menuController extends AdoNodeController{
  @Inject(menuService)
  menuService!: menuService
  

  @Get("/test")
  hello() {
    return {
      msg:"ok",
      code:0,
      data:"hello world"
    }
  }

}