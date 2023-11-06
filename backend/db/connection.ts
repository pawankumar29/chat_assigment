import { Sequelize, DataTypes, QueryTypes, Op, Model } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(
  process.env.DBNAME as string,
  process.env.USER_NAME as string,
  process.env.PASSWORD as string,
  {
    dialect: "mysql",
     host: process.env.HOST_NAME,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    logging: true,
    define: {
      timestamps: true,
      freezeTableName: true,
    },
    dialectOptions: {
      // useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true,
    },
    timezone: "+05:30",
  }
);

sequelize.sync({force:false}).then(() => {
  console.log('sync has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});

sequelize.authenticate().then(() => {
  console.debug(`${ process.env.DBNAME} DB Connection has been established successfully.`);
}).catch((error: any) => {
  console.error(`${ process.env.DBNAME} DBUnable to connect to the database: ${ process.env.DBNAME}`, error);
});

export { sequelize, DataTypes, QueryTypes, Op, Model };
