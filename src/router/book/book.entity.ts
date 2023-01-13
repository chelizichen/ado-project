import { AdoOrmBaseEntity, Entity, Keyword, AutoCreate, Key } from "ado-node";

@Entity("book")
export class book extends AdoOrmBaseEntity {
  @Key
  id!: string;
  @Keyword
  name!: string;
  isold!: string;
  type!: string;
  opt!: string;
  desc!: string;
  phone!: string;
  date!: string;
  @AutoCreate
  createTime!: string;
}