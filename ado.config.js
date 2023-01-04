import { defineAdoNodeConfig } from "ado-node";

module.exports =  defineAdoNodeConfig({
  database: {
    type: "mysql",
    host: "localhost",
    username: "root",
    password: "123456",
    database: "lmr_medical",
    port: 3306,
    connectionLimit: 10,
  },
});
