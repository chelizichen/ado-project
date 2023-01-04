import { Module } from "ado-node";
import { hostipalController } from './hostipal.controller'

@Module({
  Controller:[hostipalController],
  Provider:[]
})
export class hostipalModule{}