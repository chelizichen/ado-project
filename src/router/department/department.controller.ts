import { AdoNodeController,Body,Controller,Get,Inject, Post, Query } from "ado-node";
import { ret } from "../../config/ret";
import { QueryId, Pagination } from "../../type/common";
import { department } from "./department.entity";
import { departmentService } from './department.service';

@Controller("/department")
export class departmentController extends AdoNodeController{
  @Inject(departmentService)
  departmentService!: departmentService

  @Get("/one")
  async one(@Query() query:QueryId) {
    const { id } = query
    const data = await this.departmentService.Department.getOneBy(id);
    return ret.success(data)
  }


  @Get("/list")
  async list(@Query() query:Pagination){
    const data = await this.departmentService.List(query)
    return ret.success(data)
  }

  @Post("/update")
  async update(@Body() body:department){
    const data = await this.departmentService.update(body)
    return ret.success(data)
  }

  @Get("/del")
  async del(@Query() query:QueryId){
    const data = await this.departmentService.Department.delOneBy(query.id);
    return ret.success(data)
  }

}