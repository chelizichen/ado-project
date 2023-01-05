import { AdoNodeController, Controller, Get, Inject, Query } from "ado-node";
import { UserService } from "./user.service";
import { ret } from "../../config/ret";
import { QueryId } from "../../type/common";

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
}
