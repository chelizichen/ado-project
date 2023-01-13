import { Module } from "ado-node";
import { bookController } from './book.controller'

@Module({
  Controller:[bookController],
  Provider:[]
})
export class bookModule{}