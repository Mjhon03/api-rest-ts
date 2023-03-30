import { Model, Optional } from "Sequelize";

type UserAttributes = {
  id:number,
  name:string,
  lastName:string,
  cellphone:number,
  email:string,
  password:string,
}

type UserCreationAttributes = Optional<UserAttributes, 'id'>;

class User extends Model<UserAttributes, UserCreationAttributes> {
  declare id:number;
  declare name:string;
  declare lastName:string;
  declare cellphone:number;
  declare email:string;
  declare password:string;

}