
import { sequelize,DataTypes } from "../connection";
import { recordInterface } from "../interfaces/db.interface";
import User from "./user.model";
export const record=sequelize.define<recordInterface>("record",{   // no overload matches this call

    wake_up_time:{
        type:DataTypes.STRING,
        allowNull:false
    },
    sleep_time:{
        type:DataTypes.STRING,
        allowNull:false
    },
    total_time:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    userId:{
    
            type: DataTypes.INTEGER,
                allowNull: false,
            
    }
},

{timestamps:true});

// export default record;