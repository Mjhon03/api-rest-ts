import { Sequelize } from 'Sequelize';
import dotenv from "dotenv";

const dbDatabase = process.env.DATABASE as string;
const dbUsername = process.env.USER as string;
const dbPassword = process.env.PASSWORD;
const dbHost = process.env.HOST;

console.log(dbDatabase);
console.log(dbUsername);
console.log(dbPassword);
console.log(dbHost);

const sequelizeConnection = new Sequelize(dbDatabase,dbUsername,dbPassword, {
  host:dbHost,
  dialect:"mysql",
  define:{
    timestamps:false,
    freezeTableName:true
  }
});

const dbCoonectMySql = async () => {
  try {
    await sequelizeConnection.authenticate();
    console.log("Correct");
  } catch (error) {
    console.log("Incorrect");
  }
}

export {sequelizeConnection, dbCoonectMySql}


