import { AdoNodeController,Controller,Get,Inject, Query } from "ado-node";
import { menuService } from './menu.service';
import { ret } from "../../config/ret";

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

  @Get("/router")
  async getRouter(@Query() query: { permission: string }) {
    const { permission } = query
    const data = await this.menuService.getRouter(permission);
    console.log("data", data);
    
    return ret.success(data)
  }

  @Get("/list")
  async list() {
    const data = await this.menuService.Menu.getList("0","100")
    return ret.success(data)
  }
}