import { Module } from "ado-node";
import { departmentController } from './department.controller'
import { doctorModule } from '../doctor/doctor.module';
import { orderModule } from '../order/order.module';

@Module({
  Controller:[departmentController],
  Provider:[doctorModule,orderModule]
})
export class departmentModule{}