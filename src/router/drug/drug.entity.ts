import { AdoOrmBaseEntity, Entity, Key, Keyword } from "ado-node";

@Entity("drug")
export class drug extends AdoOrmBaseEntity{
    @Key
    id!:string;

    @Keyword
    dr_name!:string;

    dr_price!:string;

    dr_usage!:string;

    dr_remark!:string;
    
}