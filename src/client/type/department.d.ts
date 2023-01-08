export type  department__table  = {
  id: string; // 科室id
  dep_code: string; // 科室代码
  dep_name: string; // 科室名称
  dep_total: string; // 科室人数
  dep_superTotal: string; // 科室主任医师人数
  dep_intro: string; // 科室介绍
  dep_remark: string; // 备注
  dep_duty_doctor_id: string; // 责任医生Id
  createTime: string; // 成立日期
}


export type add_department = Omit<department__table, "createTime" | "id">;
export type update_department = Omit<department__table, "createTime">;