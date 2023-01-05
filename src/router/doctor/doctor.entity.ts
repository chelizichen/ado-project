import { AdoOrmBaseEntity, AutoCreate, Entity, Key } from "ado-node";

@Entity("doctor")
export class doctor extends AdoOrmBaseEntity{
  @Key
  id !: string   // 医生id
  
  d_user_id !: string   // 医生用户ID
  
  d_name !: string   // 姓名
  
  d_age !: string   // 年龄
  
  d_university !: string   // 毕业学校
  
  d_education !: string   // 学位学历
  
  d_major !: string   // 专业
  
  d_level !: string   // 职称
  
  d_intro !: string   // 医生介绍
  
  d_photo !: string   // 医生照片
  
  d_order_money !: string   // 挂号费用
  
  d_work_date !: string   // 开始工作时间
  
  d_depart_code !: string   // 科室code

  @AutoCreate
  createTime !:string   // 入职时间
}