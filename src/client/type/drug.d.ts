export type drug__table = {
    id:string;
    dr_code:string; // 药品统一编码
    dr_name:string;
    dr_price:string;
    dr_usage:string;
    dr_remark:string;
}

export type add_drug = Omit<drug__table, "createTime" | "id">;
export type update_drug = Omit<drug__table, "createTime">;