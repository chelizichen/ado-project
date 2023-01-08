import { AdoNodeController,Controller,Get,Inject } from "ado-node";
import { drugService } from './drug.service';

@Controller("/drug")
export class drugController extends AdoNodeController{
  @Inject(drugService)
  drugService!: drugService
  

  @Get("/test")
  hello() {
    return {
      msg:"ok",
      code:0,
      data:"hello world"
    }
  }

}