import { AdoNodeController,Controller,Get,Inject } from "ado-node";
import { departmentService } from './department.service';

@Controller("/department")
export class departmentController extends AdoNodeController{
  @Inject(departmentService)
  departmentService!: departmentService
  

  @Get("/test")
  hello() {
    return {
      msg:"ok",
      code:0,
      data:"hello world"
    }
  }

}