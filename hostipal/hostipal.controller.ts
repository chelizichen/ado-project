import { AdoNodeController,Controller,Get,Inject } from "ado-node";
import { hostipalService } from './hostipal.service';

@Controller("/hostipal")
export class hostipalController extends AdoNodeController{
  @Inject(hostipalService)
  hostipalService!: hostipalService
  

  @Get("/test")
  hello() {
    return {
      msg:"ok",
      code:0,
      data:"hello world"
    }
  }

}