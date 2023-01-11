import { Collect, Inject } from "ado-node";
import { Pagination } from "../../type/common";
import { department } from "./department.entity";

@Collect()
export class departmentService{
    @Inject(department)
    Department!:department;

    async List(query:Pagination){
        let {keyword,page,size} = query
        let sql = ""
        let data:any;
        let total:any;
        if(keyword){
          keyword = "%"+keyword+"%"
          sql = `select * from department where dep_name like ? limit ?,?`
          let count = `select count(*) as total from department where dep_name like ?`
           data = await this.Department.getMany(sql,[keyword,Number(page),Number(size)])
           total = await this.Department.getMany(count,[keyword])
        }else{
          sql = "select * from department limit ?,?"
          let count = `select count(*) as total from department`
           data =  await this.Department.getMany(sql,[Number(page),Number(size)])
           total = await this.Department.getMany(count)
          }
        return {data,total:total[0]['total']}
    }
      async update(department:department){
        const {id} = department
        let data:any;
        if(id){
          data = await this.Department.update(department)
        }else{
          data = await this.Department.save(department)
        }
        return data
      }
}