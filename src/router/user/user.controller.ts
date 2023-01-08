import { AdoNodeController, Body, Controller, Get, Inject, Post, Query } from "ado-node";
import { UserService } from "./user.service";
import { ret } from "../../config/ret";
import { Pagination, QueryId } from "../../type/common";
import { User } from "./user.entity";

@Controller("/user")
export class UserController extends AdoNodeController {
  @Inject(UserService)
  UserService!: UserService;

  @Get("/test")
  hello() {
    return ret.success("hello world");
  }

  @Get("/one")
  async one(@Query() query: QueryId) {
    const data = await this.UserService.User.getOneBy(query.id);
    return ret.success(data);
  }

  @Get("/list")
  async list(@Query() query:Pagination){
    const data = await this.UserService.List(query)
    return ret.success(data)
  }

  @Post("/update")
  async update(@Body() body:User){
    const data = await this.UserService.update(body)
    return ret.success(data)
  }

  @Get("/del")
  async del(@Query() query:QueryId){
    const data = await this.UserService.User.delOneBy(query.id);
    return ret.success(data)
  }
}
