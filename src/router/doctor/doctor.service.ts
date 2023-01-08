import { Collect, Inject } from "ado-node";
import { Pagination } from "../../type/common";
import { doctor } from "./doctor.entity";

@Collect()
export class doctorService{
  @Inject(doctor)
  Doctor!: doctor
  
  async List(query:Pagination){
    let {keyword,page,size} = query
    let sql = ""
    let data:any;
    let total:any;
    if(keyword){
      keyword = "%"+keyword+"%"
      sql = `select * from doctor where d_name like ? limit ?,?`
      let count = `select count(*) as total from doctor where d_name like ?`
      // @ts-ignore
       data = await this.Doctor.getMany(sql,[keyword,Number(page),Number(size)])
       // @ts-ignore
       total = await this.Doctor.getMany(count,[keyword])
    }else{
      sql = "select * from doctor limit ?,?"
      let count = `select count(*) as total from doctor`
      // @ts-ignore
       data =  await this.Doctor.getMany(sql,[Number(page),Number(size)])
       // @ts-ignore
       total = await this.Doctor.getMany(count)
      }
    return {data,total:total[0]['total']}
}
  async update(doctor:doctor){
    const {id} = doctor
    let data:any;
    if(id){
      data = await this.Doctor.update(doctor)
    }else{
      data = await this.Doctor.save(doctor)
    }
    return data
  }
}