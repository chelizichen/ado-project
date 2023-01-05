import { AdoOrmBaseEntity, AutoCreate, Entity, Key } from "ado-node";

@Entity("user")
export class User extends AdoOrmBaseEntity {
  @Key
  id!: string;
  u_name!: string;
  u_password!: string;
  u_email!: string;
  u_phone!: string;
  u_permission!: string;
  @AutoCreate
  createTime!: string;
}
