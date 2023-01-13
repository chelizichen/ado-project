export type book__table = {
  id: string;
  name: string;
  isold: boolean;
  date: string;
  type: string;
  opt: Array<any>;
  desc: string;
  phone: string;
  createTime: string;
};



export type add_book = Omit<book__table, "createTime" | "id">;
export type update_book = Omit<book__table, "createTime">;