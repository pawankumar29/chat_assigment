import { messages } from "./models/message.model";
import { participant } from "./models/participant.model";
import { room } from "./models/room.model";
import User from "./models/user.model";

User.hasMany(messages, { foreignKey: 'from' });
messages.belongsTo(User, { foreignKey: 'from' });

User.hasMany(messages, { foreignKey: 'to' });
messages.belongsTo(User, { foreignKey: 'to' });

User.hasMany(participant, { foreignKey: 'userId' });
participant.belongsTo(User, { foreignKey: 'userId' });

room.hasMany(participant, { foreignKey: 'roomId' });
participant.belongsTo(room, { foreignKey: 'roomId' });

room.hasMany(messages, { foreignKey: 'roomId' });
messages.belongsTo(room, { foreignKey: 'roomId' });