import { defineStore } from "pinia";

type __state__ = {
    isMobile:boolean
};

let deviceStore = defineStore("device", {
    state: (): __state__ => ({
        isMobile:false
    }),
    actions:{
        setIsMobel(bool:boolean){
            this.isMobile = bool
        }
    }
})

export default deviceStore