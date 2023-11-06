
import { sequelize,DataTypes } from "../connection";
import { room } from "./room.model";
import User from "./user.model";
import { messageInterface } from "../interfaces/db.interface";

export const messages = sequelize.define<messageInterface>('message', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true, // Allow null for messages with file uploads
    },
  
    from: {
      type: DataTypes.INTEGER,
      allowNull: false,
  references: {
      model: User,
    key: 'id', 
  }
    },
    to: {
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
  
  });