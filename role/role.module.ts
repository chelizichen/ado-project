import { Module } from "ado-node";
import { roleController } from './role.controller'

@Module({
  Controller:[roleController],
  Provider:[]
})
export class roleModule{}