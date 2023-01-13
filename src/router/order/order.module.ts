import { Module } from "ado-node";
import { orderController } from './order.controller'
import { bookModule } from "../book/book.module";

@Module({
  Controller:[orderController],
  Provider:[bookModule]
})
export class orderModule{}