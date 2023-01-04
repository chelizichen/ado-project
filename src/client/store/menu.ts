import { defineStore } from "pinia";
import {  router_menu } from "../type/menu";

type __state__ = {
  menu: Array<router_menu>;
  asyncRoutesMark:boolean
};
const page = import.meta.glob("../pages/*/*.vue");


let useMenuStore = defineStore("menu", {
  state: (): __state__ => ({
    menu: [],
    asyncRoutesMark: false,
  }),
  actions: {
    setMenu(menu: router_menu[]) {
      this.menu = menu;
    },
    setAsyncRoutesMark(data:boolean) {
      this.asyncRoutesMark = data;
    },
    setAsyncRoutes(menu: router_menu[]) {
      let filterMenu = menu.filter((el) => {
        if (el.component == "ADMIN") {
          // @ts-ignore
          el.component = page["../pages/admin/index.vue"];
          el.path = "/admin/" + el.path;
          const children = el.children.filter((el) => {
            let path = `../pages/${el.component}.vue`;
            const component = page[path];
            // @ts-ignore
            el.component = component;
            return el;
          });
          el.children = children;
          return el;
        }
      });
      return filterMenu
    }
  },
});


export default useMenuStore