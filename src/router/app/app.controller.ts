import { AdoNodeController, Body, Controller, Get, Inject } from "ado-node";
import { appService } from "./app.service";
import { proxyRequest } from "../../config/micro_service";

@Controller("/app")
export class appController extends AdoNodeController {
  @Inject(appService)
  appService!: appService;

  @Get("/test")
  hello() {
    return {
      msg: "ok",
      code: 0,
    };
  }

  @Get("/proxy")
  async test(@Body() body:any) {
    const data = await proxyRequest({
      interFace: "Hello",
      method: "hello",
      data: body,
    });
    console.log("data", data);
    return{
      code: 0,
      message: "ClientSide",
      data
    }
  }
}
