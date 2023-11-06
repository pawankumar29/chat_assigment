import { Server } from 'socket.io';
import { room } from '../db/models/room.model';
import { participant } from '../db/models/participant.model';
import User from '../db/models/user.model';
import { messages } from '../db/models/message.model';

export const intializeSocketServer=async(app:any)=>{
const io=new Server(app,{
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", async(msg) => {
      console.log("socketJoined===",msg)

      try {

        const userData:any=await User.findOne({where:{
           email:msg.email
        }})

        if(!userData) {
 console.log("errorInFindUser====>no user Avalable ")
          return;

        }

        msg.userId=userData.id ;

        const roomExist: any = await room.findOne({
            where: {
                name: msg.room
            }
        });


console.log("msg===>",msg);
        if (!roomExist) {
            const roomData = {
                name: msg.room,    
            }
            const roomCreate: any = await room.create(roomData);
            console.log("roomCreate===>",roomCreate);
            const participantDataToStore = {
                userId: msg.userId,
                roomId: roomCreate.id
            }



            const participantData = await participant.create(participantDataToStore)


            // socket.emit('join', msg);   //for checking to webview 
        }
        else {

            const participantExist = await participant.findOne({
                where: {
                    userId: msg.userId,
                    roomId: roomExist.id
                }
            })

            if (participantExist) {
                console.log(`user id ${msg.userId} exist already`)
            }
            else {
                const participantDataToStore = {
                    userId: msg.userId,
                    roomId: roomExist.id
                }
                const participantData = await participant.create(participantDataToStore)

            }
            //  //code for testing 
            //  socket.join(msg.room);
            //  io.to(socket.id).emit('join', msg); // only while checking frontend for me 
            //  //over

            console.log("errorInJoin==room exist ALREADY",)
        }
        socket.join(msg.room);




    } catch (error) {
        console.log("errorInJoin-->", error);
    }
      
    });



  
    socket.on("send_message", async(msg) => {
      console.log("inside the send message ")
      try {
        //--------------------
        const roomExist:any=await room.findOne({
            where:{
                name:msg.room
            }                                     // only while checking for frontend
        });

        msg.roomId=roomExist.id;

          // if the participant to is not added in the roomId

          //check From
          const userData:any=await User.findOne({where:{
            email:msg.from
         }})
 
         if(!userData) {
  console.log("errorInFindFromUser====>no user Avalable ")
           return;
 
         }

         //check to
         const userDataTo:any=await User.findOne({where:{
          email:msg.to
       }})

       if(!userDataTo) {
console.log("errorInFindToUser====>no user Avalable ")
         return;

       }
           msg.to=userDataTo.id;
           msg.from=userData.id;

           console.log("msg+++===>",msg);
          const checkParticipant=await participant.findOne({
             where:{
                roomId:msg.roomId,
                userId:msg.to
             }
          })

          if(!checkParticipant){
            await participant.create({ roomId:msg.room,
                userId:msg.to});
                
          }

        //------------------------------------------------------------
        const messageData = await messages.create(msg);

        console.log("message", messageData);
        socket.to(msg.room).emit("receive_message", msg);


        return messageData;
    } catch (error) {

        console.log("errorInChat", error)

    }
    });
  });
}

