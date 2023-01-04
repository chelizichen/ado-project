import { defineStore } from "pinia";
import { doctor__table } from "../type/doctor";
import { user } from "../type/user";

type _state_ = Partial<{
  userId: string;
  doctor__info: doctor__table;
  user_info: user;
}>;

let useUserInfoStore = defineStore("useUserStore", {
  state: (): _state_ => ({
    userId: undefined,
    user_info: undefined,
    doctor__info: undefined,
  }),
  actions: {
    getUserId() {
      if (!this.userId) {
        let userId = localStorage.getItem("userId");
        if (!userId) {
          return false;
        } else {
          return userId;
        }
      } else {
        return this.userId;
      }
    },

    async setUserInfo(obj: any) {
      this.user_info = obj;
    },
    async setOwnerInfo(obj: any) {
      this.doctor__info = obj;
    },
  },
});

export default useUserInfoStore;
