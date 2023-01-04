import { Module } from "ado-node";
import { departmentController } from './department.controller'

@Module({
  Controller:[departmentController],
  Provider:[]
})
export class departmentModule{}