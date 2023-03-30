import { Sequelize } from 'Sequelize';

const dbDatabase = process.env.DATABASE as string;
const dbUsername = process.env.USER as string;
const dbPassword = process.env.PASSWORD;
const dbHost = process.env.HOST;

const sequelizeConnection = new Sequelize(dbDatabase,dbUsername,dbPassword, {
  host:dbHost,
  dialect:"mysql",
  define:{
    timestamps:false,
    freezeTableName:true
  }
});


export default sequelizeConnection;

// const sequelize = new Sequelize(
//   database = dbDatabase,
//   username,
//   password,
//   {
//       host, 
//       dialect:"mysql",
//       define:{
//           timestamps:false,
//           freezeTableName: true
//       }
//   }
// )
