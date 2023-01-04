import { Module } from "ado-node";
import { orderController } from './order.controller'

@Module({
  Controller:[orderController],
  Provider:[]
})
export class orderModule{}