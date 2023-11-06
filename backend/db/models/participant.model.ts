
import { sequelize,DataTypes } from "../connection";
import { room } from "./room.model";
import User from "./user.model";
import { participantInterface } from "../interfaces/db.interface";

export const participant = sequelize.define<participantInterface>('participant', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
          allowNull: false,
      references: {
          model: User,
        key: 'id', 
      }
  },
  
    roomId: {
      type: DataTypes.INTEGER,
          allowNull: false,
      references: {
          model: room,
        key: 'id', 
      }
  }
    
      
  },
  
  
  );