import {
  AdoNodeController,
  Body,
  Controller,
  Inject,
  Post,
  Get
} from "ado-node";
import { appService } from "./app.service";
import { proxyJavaRequest, proxyRequest } from "../../config/micro_service";

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

  @Post("/proxy")
  async test(@Body() body: any) {
    const data = await proxyRequest({
      interFace: "HelloInterFace",
      method: "TestRet",
      data: body,
    });
    console.log("data", data);
    return {
      code: 0,
      message: "ClientSide",
      data,
    };
  }

  @Post("/proxy_java")
  async javaProxy(@Body() body: any) {
    const data = await proxyJavaRequest({
      interFace: "HelloInterFace",
      method: "TestRet",
      data: body,
    });
    console.log("data", data);
    return {
      code: 0,
      message: "ClientSide",
      data,
    };
  }

}
