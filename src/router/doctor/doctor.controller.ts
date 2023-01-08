import { AdoNodeController,Body,Controller,Get,Inject, Post, Query } from "ado-node";
import { doctorService } from './doctor.service';
import { Pagination, QueryId } from "../../type/common";
import { ret } from "../../config/ret";
import { doctor } from "./doctor.entity";

@Controller("/doctor")
export class doctorController extends AdoNodeController{
  @Inject(doctorService)
  doctorService!: doctorService
  

  @Get("/one")
  async one(@Query() query:QueryId) {
    const { id } = query
    const data = await this.doctorService.Doctor.getOneBy(id);
    return ret.success(data)
  }


  @Get("/list")
  async list(@Query() query:Pagination){
    const data = await this.doctorService.List(query)
    return ret.success(data)
  }

  @Post("/update")
  async update(@Body() body:doctor){
    const data = await this.doctorService.update(body)
    return ret.success(data)
  }

  @Get("/del")
  async del(@Query() query:QueryId){
    const data = await this.doctorService.Doctor.delOneBy(query.id);
    return ret.success(data)
  }

}