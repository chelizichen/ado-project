import { Collect, Inject, getConnection,query } from "ado-node";
import { Pagination } from "../../type/common";
import { menu } from "./menu.entity";

@Collect()
export class menuService {
  @Inject(menu)
  Menu!: menu;

  async getRouter(permission: string) {
    return new Promise(async (resolve, reject) => {
      let routerList: any[] = [];
      let sql = new query()
        .setEntity("menu")
        .like_and("m_permission","'%" + permission + "%'")
        .getSql();
      
      const conn = await getConnection();
      conn.query(sql, function (err: any, res: any[]) {
        if (err) {
          reject(err);
        }
        // 得到父组件
        res.forEach((menu) => {
          if (menu.m_is_root == "1") {
            routerList.push(menu);
          }
        });

        // 得到子组件
        res.forEach((menu) => {
          if (menu.m_is_root == "0") {
            let menu_root_id = menu.m_root_id;
            let root_index = routerList.findIndex(
              (el) => el.id == menu_root_id
            );
            if (routerList[root_index] && !routerList[root_index].children) {
              routerList[root_index].children = [];
            }
            routerList[root_index].children.push(menu);
          }
        });

        const newRouterList = routerList.map((el) => {
          let newObj: Record<string, any> = {};
          newObj.name = el.m_name;
          newObj.path = el.m_path;
          newObj.component = el.m_component;
          newObj.children = el.children.map((cd:any) => {
            let newObj1: Record<string, any> = {};
            newObj1.name = cd.m_name;
            newObj1.path = cd.m_path;
            newObj1.component = cd.m_component;
            return newObj1;
          });
          return newObj
        });
        console.log("newRouterList", newRouterList);

        resolve(newRouterList);
      });
    });
  }

  async List(query:Pagination){
    let {keyword,page,size} = query
    let sql = ""
    let data:any;
    let total:any;
    if(keyword){
      keyword = "%"+keyword+"%"
      sql = `select * from menu where m_name like ? limit ?,?`
      let count = `select count(*) as total from menu where m_name like ?`
      // @ts-ignore
       data = await this.Menu.getMany(sql,[keyword,Number(page),Number(size)])
       // @ts-ignore
       total = await this.Menu.getMany(count,[keyword])
    }else{
      sql = "select * from menu limit ?,?"
      let count = `select count(*) as total from menu`
      // @ts-ignore
       data =  await this.Menu.getMany(sql,[Number(page),Number(size)])
       // @ts-ignore
       total = await this.Menu.getMany(count)
      }
    return {data,total:total[0]['total']}
}
  async update(menu:menu){
    const {id} = menu
    let data:any;
    if(id){
      data = await this.Menu.update(menu)
    }else{
      data = await this.Menu.save(menu)
    }
    return data
  }
}
