import { Collect, Inject } from "ado-node";
import { Pagination } from "../../type/common";
import { drug } from "./drug.entity";

@Collect()
export class drugService{
    @Inject(drug)
    Drug!:drug;
    
    async List(query:Pagination){
        let {keyword,page,size} = query
        let sql = ""
        let data:any;
        let total:any;
        if(keyword){
          keyword = "%"+keyword+"%"
          sql = `select * from drug where dr_name like ? limit ?,?`
          let count = `select count(*) as total from drug where dr_name like ?`
           data = await this.Drug.getMany(sql,[keyword,Number(page),Number(size)])
           total = await this.Drug.getMany(count,[keyword])
        }else{
          sql = "select * from drug limit ?,?"
          let count = `select count(*) as total from drug`
           data =  await this.Drug.getMany(sql,[Number(page),Number(size)])
           total = await this.Drug.getMany(count)
          }
        return {data,total:total[0]['total']}
    }
      async update(drug:drug){
        const {id} = drug
        let data:any;
        if(id){
          data = await this.Drug.update(drug)
        }else{
          data = await this.Drug.save(drug)
        }
        return data
      }
}