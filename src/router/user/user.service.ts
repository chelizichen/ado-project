import { Collect, Inject } from "ado-node";
import { Pagination } from "../../type/common";
import { User } from "./user.entity";

@Collect()
export class UserService {
  @Inject(User)
  User!:User


  async List(query:Pagination){
      let {keyword,page,size} = query
      let sql = ""
      let data:any;
      let total:any;
      if(keyword){
        keyword = "%"+keyword+"%"
        sql = `select * from user where u_name like ? limit ?,?`
        let count = `select count(*) as total from user where u_name like ?`
         data = await this.User.getMany(sql,[keyword,Number(page),Number(size)])
         total = await this.User.getMany(count,[keyword])
      }else{
        sql = "select * from user limit ?,?"
        let count = `select count(*) as total from user`
         data =  await this.User.getMany(sql,[Number(page),Number(size)])
         total = await this.User.getMany(count)
        }
      return {data,total:total[0]['total']}
  }

  async update(User:User){
    const {id} = User
    let data:any;
    if(id){
      data = await this.User.update(User)
    }else{
      data = await this.User.save(User)
    }
    return data
  }
}
