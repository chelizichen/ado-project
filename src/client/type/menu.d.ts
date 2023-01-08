export type menu__table = {
  id: string;
  m_name: string;
  m_permission: string;
  m_is_root: string;
  m_root_id: string;
  m_path: string;
  m_component: string;
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
