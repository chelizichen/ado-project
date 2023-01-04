import { Module } from "ado-node";
import { newsController } from './news.controller'

@Module({
  Controller:[newsController],
  Provider:[]
})
export class newsModule{}