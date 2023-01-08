import { AdoOrmBaseEntity, AutoCreate, Entity, Key, Keyword } from "ado-node";

@Entity("department")
export class department extends AdoOrmBaseEntity {
  @Key
  id!: string; // 科室id
  
  dep_code!: string; // 科室代码

  @Keyword
  dep_name!: string; // 科室名称

  dep_total!: string; // 科室人数

  dep_superTotal!: string; // 科室主任医师人数

  dep_intro!: string; // 科室介绍

  dep_remark!: string; // 备注

  dep_duty_doctor_id!: string; // 责任医生Id

  @AutoCreate
  createTime!: string; // 成立日期
}