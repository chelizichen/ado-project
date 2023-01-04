export type menu__table = {
  id: string;
  menuName: string;
  menuPermission: string;
  menuIsRoot: string;
  menuRootId: string;
  menuPath: string;
  menuComponent: string;
  createTime: Date;
};

export type add_menu = Omit<menu__table, "createTime" | "id">;
export type update_menu = Omit<menu__table, "createTime">;

export type router_menu = {
  name: string;
  id: string;
  path: string;
  component: string;
  children: router_menu[];
};
