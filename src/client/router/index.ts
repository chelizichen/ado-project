import { ApiRouterMenu } from "@/api/menu";
import { getOne } from "@/api/doctor";
import { getOne as getOneByUserId} from "@/api/user"
import useMenuStore from "@/store/menu";
import useUserInfoStore from "@/store/userInfo";
import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
let routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    redirect: "/home/index",
  },
  {
    path: "/home",
    component: () => import("@/pages/home/index.vue"),
    children: [
      {
        path: "login",
        component: () => import("@/pages/home/login/index.vue"),
      },
      {
        path: "index",
        component: () => import("@/pages/home/index/index.vue"),
      },
    ],
  },
  {
    path: "/admin",
    redirect: "/admin/dashboard",
  },
  {
    path: "/admin",
    component: () => import("@/pages/admin/layout/index.vue"),
    children: [
      {
        path: "dashboard",
        component: () => import("@/pages/admin/layout/dashboard.vue"),
      },
    ],
  },
];
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});


router.beforeEach(async (to, from, next) => {
  const userStore = useUserInfoStore();
  const menuStore = useMenuStore();

  if (to.path == "/home/login") {
    next();
  } else {
    // 后续改成token 存在本地
    let userId = userStore.getUserId() as string;
    if (userId) {
      const { asyncRoutesMark, setAsyncRoutesMark, setAsyncRoutes, setMenu } =
        menuStore;
      if (asyncRoutesMark) {
        next();
      } else {
        // 用户信息
        const user_data = await getOneByUserId({ id: userId })
        // 个人信息
        const owner_data = await getOne({ id: userId });
        console.log(user_data);
        console.log(owner_data);
        
        
        userStore.setUserInfo(user_data.data[0]);
        userStore.setOwnerInfo(owner_data.data[0]);
        const permission = userStore.user_info?.u_permission as string;
        const menu = await ApiRouterMenu({ permission });

        console.log("menu", menu);
        
        const filterMenu = setAsyncRoutes(menu.data);
        console.log("filterMenu", filterMenu);
        
        setMenu(filterMenu);
        filterMenu.forEach((el) => {
          // @ts-ignore
          router.addRoute(el);
        });
        setAsyncRoutesMark(true);
        next({ ...to, replace: true });
      }
    } else {
      next("/home/login");
    }
  }
});

export default router;
