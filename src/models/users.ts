import { Model, InferAttributes, InferCreationAttributes, DataTypes, Sequelize } from 'Sequelize';
import { sequelizeConnection } from '../config/database';

const Users = sequelizeConnection.define(
  "Users",
  {
    id:{
      type:DataTypes.INTEGER,
      allowNull:true,
      primaryKey:true,
    },
    name:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    lastName:{
      type:DataTypes.STRING,
      allowNull:true,
    },
    cellphone:{
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    email:{
      type:DataTypes.STRING,
      allowNull:true,
      unique: true,
    },
    password:{
      type:DataTypes.STRING,
      allowNull:true,
  }
  },
);

export {Users}