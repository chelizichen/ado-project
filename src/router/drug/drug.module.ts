import { Module } from "ado-node";
import { drugController } from './drug.controller'

@Module({
  Controller:[drugController],
  Provider:[]
})
export class drugModule{}