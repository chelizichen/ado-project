import { Module } from "ado-node";
import { doctorController } from './doctor.controller'

@Module({
  Controller:[doctorController],
  Provider:[]
})
export class doctorModule{}