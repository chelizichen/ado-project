import { Module } from "ado-node";
import { menuController } from './menu.controller'

@Module({
  Controller:[menuController],
  Provider:[]
})
export class menuModule{}