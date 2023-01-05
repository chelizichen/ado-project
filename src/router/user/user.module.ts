import { Module } from "ado-node";
import { UserController } from "./user.controller";
import { menuModule } from '../menu/menu.module';

@Module({
  Controller: [UserController],
  Provider: [menuModule],
})
export class UserModule {}
