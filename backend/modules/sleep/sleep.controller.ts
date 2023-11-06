import express from "express";
import {  verifyToken } from "./sleep.helper";
import { record } from "../../db/models/record.model";
import constant from "../../constant/constant";
import User from "../../db/models/user.model";
import { sequelize } from "../../db/connection";


class sleepController {

 
    recordAdd = async (req: express.Request, res: express.Response) => {
        try {

            const dataToAdd = await record.create(req.body);

            res.json({
                status: 1, message: "successful", dataToAdd: dataToAdd
            })
        }
        catch (error: any) {

            const errorMessage = error.message || error;

            res.json({ status: 0, Error: errorMessage })


        }
    }

    getRecord = async (req: express.Request, res: express.Response) => {
        try {
            const userId = req.params.id;
            console.log("userId===>", userId);
            const data = await record.findAll({ where: { userId: userId } });

            res.json({
                status: 1, message: "successful", data: data
            })


        }



        catch (error: any) {

            const errorMessage = error.message || error;

            res.json({ status: 0, Error: errorMessage })


        }
    }

    editRecord = async (req: express.Request, res: express.Response) => {
        try {

            const userId = req.params.id;
            console.log("userId::", userId);
            const data = await record.update(req.body, { where: { id: userId } },);
            if (data[0])
                res.json({
                    status: 1, message: "successful", data: data
                })
            else
                throw { message:constant.WRONG_DATA }
        }



        catch (error: any) {

            const errorMessage = error.message || error;

            res.json({ status: 0, Error: errorMessage })


        }
    }

    deleteRecord = async (req: express.Request, res: express.Response) => {
        try {

            const userId = req.params.id;
            console.log("userId", userId);
            const data: any = await record.destroy({ where: { id: userId } });

            if (data[0])
                res.json({
                    status: 1, message: "successful", data: data
                })
            else
                throw { message: constant.WRONG_DATA }



        }



        catch (error: any) {

            const errorMessage = error.message || error;

            res.json({ status: 0, Error: errorMessage })


        }
    }
    decodeToken = async (req: express.Request, res: express.Response) => {
        try {

            const { token } = req.body;
            const data = await verifyToken(token);

            if (data) {
                res.json({ status: 1, data: data });
            }
            else
                throw { message:constant.WRONG_DATA,data: null }

        }

        catch (error: any) {

            const errorMessage = error.message || error;

            res.json({ status: 0, Error: errorMessage })


        }
    }

    getLatestRecord = async (req: express.Request, res: express.Response) => {
        try {
            const userId = req.params.id;
            console.log("userId===>", userId);

            const  query1="select * from record order by createdAt desc limit 1";

            const data = await sequelize.query(query1);
console.log("data===>",data);

            res.json({
                status: 1, message: "successful", data: data[0]
            })


        }

        catch (error: any) {

            const errorMessage = error.message || error;

            res.json({ status: 0, Error: errorMessage })

// defects
// 1.without any goal clearity do not enter 
// 2.consider all the negative and positive Cases 
// 3.believe in the process only consistency

        }
    }

}



const object= new sleepController();

export default object;


// defects
// 1.without any goal clearity do not enter 
// 2.consider all the negative and positive Cases 
// 3.believe in the process only consistency noo goal think for getting nothing only 
// you are too much slow give time to yourself always 