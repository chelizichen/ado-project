import { Collect, Inject } from "ado-node";
import { User } from "./user.entity";

@Collect()
export class UserService {
  @Inject(User)
  User!:User

}
