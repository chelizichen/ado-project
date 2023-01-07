import { AdoOrmBaseEntity, AutoCreate, Entity, Key } from "ado-node";

@Entity("menu")
export class menu extends AdoOrmBaseEntity{
  @Key
  id!: string //
  
  m_name!: string //
  
  m_permission!: string //
  
  m_is_root!: string //
  
  m_root_id!: string //
  
  m_path!: string //
  
  m_component!: string //
  
  @AutoCreate
  createTime!: string //
}