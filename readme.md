# ado-node v3.0.0 project

## 基于Vue的医疗预约系统的设计与实现

    use vue@3.2 vite@2.6.10 ado-node@3.0.0

## 科室部门 department

* id 科室id
* dep_code 科室代码
* dep_name 科室名称
* dep_total 科室人数
* dep_superTotal 科室主任医师人数
* dep_intro 科室介绍
* dep_remark 备注
* dep_duty_doctor_id 责任医生Id
* createTime 成立日期

## 医生 doctor

* id 医生id
* d_user_id 医生用户ID
* d_name 姓名
* d_age 年龄
* d_university 毕业学校
* d_education 学位学历
* d_major 专业
* d_level 职称
* d_intro 医生介绍
* d_photo 医生照片
* d_order_money 挂号费用
* d_work_date 开始工作时间
* d_depart_id 科室id
* createTime 入职时间

## 排期 doc_schedue

* id
* doc_id 医生id
* doc_date 日期
* doc_step 时段
* doc_sort 排号
* doc_is_order 是否预约

## 新闻 news

* id
* n_author 作者
* n_title 标题
* n_is_public 是否公开
* n_photo 照片
* n_is_top 是否置顶
* n_desc 描述

## order

* id
* o_user_id 用户ID
* o_doctor_id 医生ID
* o_order_id 订单ID
* o_step 时段
* o_sort 排号
* o_cost 花费
* o_is_pay 支付情况
* o_status 挂号状态
* createTime 创建时间

## 用户 user

* id;
* u_name;
* u_password;
* u_email;
* u_phone;
* u_permission;
* createTime: Date;

## 菜单 menu

* id;
* m_name;
* m_permission;
* m_is_root;
* m_root_id;
* m_path;
* m_component;
* createTime;

    <!-- @ApiModelProperty(value = "科室名称")
    private String subName;

    @ApiModelProperty(value = "科室代码")
    private String subCode;

    @ApiModelProperty(value = "科室人数")
    private String subNumber;

    @ApiModelProperty(value = "科室主任医师人数")
    private String superNumber;

    @Length(max = 1024)
    @ApiModelProperty(value = "科室介绍")
    private String about;

    @ApiModelProperty(value = "成立日期")
    private String startDate;

    @ApiModelProperty(value = "责任医生")
    private String dutyDoctor;

    @ApiModelProperty(value = "备注")
    private String remark; -->