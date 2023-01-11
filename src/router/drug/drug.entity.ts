import { AdoOrmBaseEntity, Entity, Key, Keyword } from "ado-node";

@Entity("drug")
export class drug extends AdoOrmBaseEntity{
    @Key
    id!:string;

    dr_code!:string; // 药品统一编码

    @Keyword
    dr_name!:string;

    dr_price!:string;

    dr_usage!:string;

    dr_remark!:string;
    
}