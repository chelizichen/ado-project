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
      if(keyword){
        keyword = "%"+keyword+"%"
        sql = `select * from user where u_name like ? limit ?,?`
        // @ts-ignore
         data = await this.User.getMany(sql,[keyword,Number(page),Number(size)])

      }else{
        sql = "select * from user limit ?,?"
        // @ts-ignore
         data =  await this.User.getMany(sql,[Number(page),Number(size)])
      }
      
      return data
  }
}
