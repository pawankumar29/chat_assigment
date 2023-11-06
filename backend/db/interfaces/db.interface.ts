import { Model } from "sequelize"


export interface userInterface extends Model{
    id:Number,
    name:string,
    email:string,
    age:string,
    password:string,
}


export interface recordInterface extends Model{
    wake_up_time:String,
    sleep_time:String,
    total_time:Number,
    userId:Number
}


export interface roomInterface extends Model{
    id:Number,
    name:String,
}

export interface participantInterface extends Model{
    id:Number,
    user_id:Number,
    room_id:Number,
}

export interface messageInterface extends Model{
    id:Number,
    message:String,
    from:Number,
    to:Number,
    roomId:Number

}