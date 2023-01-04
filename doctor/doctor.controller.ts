import { AdoNodeController,Controller,Get,Inject } from "ado-node";
import { doctorService } from './doctor.service';

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

}