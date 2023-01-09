import { AdoOrmBaseEntity, AutoCreate, Entity, Key } from "ado-node";

// 如果有doctorId 则走挂号订单
// 否则走药品订单

@Entity("d_order")
export class order extends AdoOrmBaseEntity {
  @Key
  id!: string; //
  o_user_id!: string; // 用户ID
  o_doctor_id!: string; // 医生ID
  o_order_id!: string; // 订单ID
  o_step!: string; // 时段
  o_sort!: string; // 排号
  o_cost!: string; // 花费
  o_is_pay!: string; // 支付情况
  o_status!: string; // 挂号状态
  o_remark!:string; // 订单备注
  o_drug_ids!:string;// 药瓶目录 存 {id:num} 的形式
  @AutoCreate
  createTime!: string; // 创建时间
}