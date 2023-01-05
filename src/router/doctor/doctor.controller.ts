import { AdoNodeController,Controller,Get,Inject, Query } from "ado-node";
import { doctorService } from './doctor.service';
import { QueryId } from "../../type/common";
import { ret } from "../../config/ret";

@Controller("/doctor")
export class doctorController extends AdoNodeController{
  @Inject(doctorService)
  doctorService!: doctorService
  

  @Get("/test")
  hello() {
    return {
      msg:"ok",
      code:0,
      data:"hello world"
    }
  }

  @Get("/one")
  async one(@Query() query:QueryId) {
    const { id } = query
    const data = await this.doctorService.doctor.getOneBy(id);
    return ret.success(data)
  }

}