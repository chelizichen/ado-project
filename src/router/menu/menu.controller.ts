import { AdoNodeController,Body,Controller,Get,Inject, Post, Query } from "ado-node";
import { menuService } from './menu.service';
import { ret } from "../../config/ret";
import { menu } from "./menu.entity";
import { Pagination, QueryId } from "../../type/common";

@Controller("/menu")
export class menuController extends AdoNodeController{
  @Inject(menuService)
  menuService!: menuService
  

  @Get("/router")
  async getRouter(@Query() query: { permission: string }) {
    const { permission } = query
    const data = await this.menuService.getRouter(permission);
    return ret.success(data)
  }

  @Get("/list")
  async list(@Query() query:Pagination) {
    const data = await this.menuService.List(query)
    return ret.success(data)
  }

  @Post("/update")
  async update(@Body() body:menu){
    const data = await this.menuService.update(body)
    return ret.success(data)
  }

  @Get("/del")
  async del(@Query() query:QueryId){
    const data = await this.menuService.Menu.delOneBy(query.id);
    return ret.success(data)
  }
  @Get("/one")
  async one(@Query() query: QueryId) {
    const data = await this.menuService.Menu.getOneBy(query.id);
    return ret.success(data);
  }
}