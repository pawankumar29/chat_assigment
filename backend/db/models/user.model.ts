import { sequelize,DataTypes } from "../connection";
import { userInterface } from "../interfaces/db.interface";
import {record} from "./record.model";
const User=sequelize.define<userInterface>("user",{   // no overload matches this call
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    age:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
 

},

{timestamps:true});



export default User;


