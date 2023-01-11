import { Module } from "ado-node";
import { departmentController } from './department.controller'
import { doctorModule } from '../doctor/doctor.module';
import { orderModule } from '../order/order.module';
import { drugModule } from "../drug/drug.module";

@Module({
  Controller:[departmentController],
  Provider:[doctorModule,orderModule,drugModule]
})
export class departmentModule{}