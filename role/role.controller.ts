import { AdoNodeController,Controller,Get,Inject } from "ado-node";
import { roleService } from './role.service';

@Controller("/role")
export class roleController extends AdoNodeController{
  @Inject(roleService)
  roleService!: roleService
  

  @Get("/test")
  hello() {
    return {
      msg:"ok",
      code:0,
      data:"hello world"
    }
  }

}