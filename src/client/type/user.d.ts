export type user = {
  id: string;
  u_name: string;
  u_password: string;
  u_email: string;
  u_phone: string;
  u_permission: string;
  createTime: string;
}


export type update_user = Omit<user,"createTime">
export type add_user = Omit<user, "createTime"|"id">;