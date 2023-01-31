module.exports =  ({
  database: {
    default:true,
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "123456",
    database: "lmr_medical",
    port: 3306,
    connectionLimit: 10,
  },
  server:{
    port:3101,
    base:"/api",
    upload: "public/upload",
    desc:"知了医生互联网医疗服务平台"
  }
});
