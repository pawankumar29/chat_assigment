import { sequelize,DataTypes } from "../connection";
import { roomInterface } from "../interfaces/db.interface";


export const room = sequelize.define<roomInterface>('room', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     
  },
  
  
  );
  