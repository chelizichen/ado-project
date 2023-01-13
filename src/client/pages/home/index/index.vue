<template>
  <div>
    <div class="banner">
      <span class="title">医疗预约挂号诊疗服务</span>
      <span class="use">适用于社区医院.诊所.中医院.门诊部等医疗机构</span>
      <div class="btn">
        <el-button size="large" plain>扫码体验</el-button>
        <el-button size="large" type="warning" plain @click="router.push(`/admin`)">免费试用</el-button>
      </div>
    </div>
    <!-- 项目介绍 -->
    <div class="intro">
      <div class="title">知了医生</div>
      <div class="sub_title">--项目介绍--</div>
      <div class="text">
        知了医生创建于2023年1月
        <br>
        为湖北省新崛起的线上医疗服务平台
        <br>
        提供服务（挂号、收银、药房）与诊疗等
        <br>
        为湖北省较大的线上医疗咨询公司。
      </div>
    </div>
    <el-progress :percentage="100" :format="format" :indeterminate="true" status="success" color="#2776ca" style="marginLeft:20px"/>
    <!-- 服务介绍 -->
    <div class="server">
      <div class="title">服务介绍</div>
      <section class="fw">
        <div v-for="(item, index) in fw_info">
          <div v-if="index % 2 == 0" class="item">
            <img :src="item.imgUrl" alt="">
            <div class="desc">
              <div class="sub_title">
                {{ item.title }}
              </div>
              <div class="text">
                {{ item.desc }}
              </div>
            </div>
          </div>
          <div v-if="index % 2 != 0" class="item">
            <div class="desc" style="text-align:right">
              <div class="sub_title">
                {{ item.title }}
              </div>
              <div class="text">
                {{ item.desc }}
              </div>
            </div>
            <img :src="item.imgUrl" alt="">
          </div>
        </div>

      </section>
    </div>
    <!-- 知了医生连接 -->
    <div class="link">
      <section>
        <div>
          <img :src="Logo" alt="" class="logo">
        </div>
      </section>
      <section>
        <div>
          <div>
            解决方案
          </div>
          <div>
            课程培训
          </div>
          <div>
            医疗健康
          </div>
          <div>
            政务民生
          </div>
          <div>
            场地会馆
          </div>
          <div>
            社区管理
          </div>
        </div>
      </section>
      <section class="kjjs">
        <div>
          <div>
            框架技术
          </div>
          <div>
            <a href="">Ado</a>
          </div>
          <div>
            <a href="">Vue</a>
          </div>
          <div>
            <a href="">Element</a>
          </div>
          <div>
            <a href="">TypeScript</a>
          </div>
          <div>
            <a href="">Vite</a>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            联系方式
          </div>
          <div>
            QQ
          </div>
          <div>
            微信
          </div>
          <div>
            邮箱
          </div>
          <div>
            电话
          </div>
          <div>
            微博
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { fw_icons } from '@/assets';
import { ElButton } from 'element-plus';
import Logo from '@/assets/Logo.jpeg'
import { useRouter } from 'vue-router';
const to_fw_icons_array = Object.values(fw_icons)
const fw_info = [{
  title: "预约挂号",
  imgUrl: "",
  desc: "提前预约预约医生时间，方便快捷，诊所资源调配轻松有序。"
}, {
  title: "经营管理",
  imgUrl: "",
  desc: "强大的数据信息.查询.分析功能，多维度经营统计报表。"
}, {
  title: "医生信息展示",
  imgUrl: "",
  desc: "医生职位职级展示，详细的履历介绍和技术呈现。让患者放心选择适合自己的医生。"
}, {
  title: "排班管理",
  imgUrl: "",
  desc: "医护人员排班便利，值班信息灵活调整，排班清晰一目了然。"
}, {
  title: "会员管理系统",
  imgUrl: "",
  desc: "精准了解会员属性， 精细化会员管理，提高复购及转化。"
}, {
  title: "数据分析",
  imgUrl: "",
  desc: "提供实时记录、统计交易信息、交易数据清算，全局控制。"
}].map((el, index) => {
  el.imgUrl = to_fw_icons_array[index].default
  return el
})
const format = (percentage:number) => (percentage == 100 ? `` : ``)
const router = useRouter()



</script>

<style scoped lang="less">
.flex_center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex_space_between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.banner {
  background-image: url("@/assets/banner.jpg");
  width: 100%;
  height: 600px;
  position: relative;

  .title {
    left: 30%;
    top: 30%;
    color: aliceblue;
    font-size: 72px;
    position: relative;
    letter-spacing: 5px;
  }

  .use {
    left: -10%;
    top: 43%;
    color: aliceblue;
    font-size: 26px;
    position: relative;
    letter-spacing: 2px;

  }

  .btn {
    position: relative;
    top: 53%;
    left: 45%;
    width: 30%;
  }
}


.intro {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 10%;
  flex-direction: column;
  box-sizing: border-box;
  margin: 60px 0 ;

  .title {
    font-size: 48px;
    letter-spacing: 4px;
    font-weight: 900;
    margin: 10px 0;
  }

  .sub_title {
    font-size: 26px;
    letter-spacing: 2px;
    font-weight: 300;

  }

  .text {
    text-align: center;
    letter-spacing: 3px;
    border: 2px dashed rgb(138, 112, 112);
    padding: 20px 200px;
    border-radius: 30px;
    font-size: 24px;
    margin: 10px 0;
    font-weight: 200;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
}

.server {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 40px 0;
  .title {
    font-size: 48px;
    letter-spacing: 4px;
    font-weight: 900;
    margin: 10px 0;
  }

  .fw {
    .flex_space_between();
    flex-wrap: wrap;
    margin: 0 10%;
    width: 80%;

    .item {
      width: 100%;
      .flex_space_between();
      flex-wrap: wrap;
      margin: 40px 0;
      .desc {
        margin: 0 30px;

        .sub_title {
          font-size: 26px;
        }

        .text {
          font-size: 14px;
        }
      }
    }
  }
}


.link {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: rgb(235, 235, 235);
  border-top: 2px dashed black;
  padding: 20px;
  section{
    text-align: center;
  }
  .logo {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  .kjjs{
    a{
      text-decoration: none;
      color: black;
    }
  }
}
</style>