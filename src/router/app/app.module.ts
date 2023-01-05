import { Module } from "ado-node";
import { appController } from "./app.controller";
import { UserModule } from "../user/user.module";
import { departmentModule } from '../department/department.module';
import { newsModule } from '../news/news.module';

@Module({
  Controller: [appController],
  Provider: [UserModule,departmentModule,newsModule],
})
export class appModule {}
