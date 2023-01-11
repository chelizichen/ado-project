import { Collect, Inject } from "ado-node";
import { Pagination } from "../../type/common";
import { order } from "./order.entity";

@Collect()
export class registerService{
    @Inject(order)
    Order!:order

    async List(query:Pagination){
        let {keyword,page,size} = query
        let sql = ""
        let data:any;
        let total:any;
        if(keyword){
          keyword = "%"+keyword+"%"
          sql = `select * from d_order,user where user.u_name like ? and d_order.o_user_id = user.id and d_order.o_drug_ids IS NULl limit ?,?`
          let count = `select count(*) as total from user,d_order where user.u_name like ? and d_order.o_user_id = user.id and d_order.o_drug_ids IS NULl limit ?,?`
           data = await this.Order.getMany(sql,[keyword,Number(page),Number(size)])
           total = await this.Order.getMany(count,[keyword])
        }else{
          sql = "select * from d_order where d_order.o_drug_ids IS NULL limit ?,?"
          let count = `select count(*) as total from d_order where d_order.o_drug_ids IS NULL`
           data =  await this.Order.getMany(sql,[Number(page),Number(size)])
           total = await this.Order.getMany(count)
          }
        return {data,total:total[0]['total']}
    }
    async update(department:order){
        const {id} = department
        let data:any;
        if(id){
          data = await this.Order.update(department)
        }else{
          data = await this.Order.save(department)
        }
        return data
    }

}

@Collect()
export class drugService{
    @Inject(order)
    Order!:order

    async List(query:Pagination){
      let {keyword,page,size} = query
      let sql = ""
      let data:any;
      let total:any;
      if(keyword){
        keyword = "%"+keyword+"%"
        sql = `select * from d_order,user where user.u_name like ? and d_order.o_user_id = user.id and d_order.o_drug_ids IS NOT NULl limit ?,?`
        let count = `select count(*) as total from user,d_order where user.u_name like ? and d_order.o_user_id = user.id and d_order.o_drug_ids IS NOT NULl limit ?,?`
         data = await this.Order.getMany(sql,[keyword,Number(page),Number(size)])
         total = await this.Order.getMany(count,[keyword])
      }else{
        sql = "select * from d_order where d_order.o_drug_ids IS NOT NULL limit ?,?"
        let count = `select count(*) as total from d_order where d_order.o_drug_ids IS NOT NULL`
         data =  await this.Order.getMany(sql,[Number(page),Number(size)])
         total = await this.Order.getMany(count)
        }
      return {data,total:total[0]['total']}
    }
    async update(department:order){
        const {id} = department
        let data:any;
        if(id){
          data = await this.Order.update(department)
        }else{
          data = await this.Order.save(department)
        }
        return data
    }

}