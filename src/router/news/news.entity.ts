import { AdoOrmBaseEntity, Entity, Key } from "ado-node";

@Entity("news")
export class news extends AdoOrmBaseEntity {
  @Key
  id!: string; //
  n_author!: string; // 作者
  n_title!: string; // 标题
  n_is_public!: string; // 是否公开
  n_photo!: string; // 照片
  n_is_top!: string; // 是否置顶
  n_desc!: string; // 描述
}
