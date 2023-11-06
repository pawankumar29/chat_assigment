
import express from "express";
import User from "../../db/models/user.model";
import { createToken } from "../sleep/sleep.helper";
import constant from "../../constant/constant";

class authentication{

    signUp = async (req: express.Request, res: express.Response) => {
        try {

            const { email, name } = req.body;


            const userAlreadyExist = await User.findOne({
                where: {
                    email: email
                }
            });



            if (userAlreadyExist) throw { message: constant.USER_EXIST }

            else {
                const userData = await User.create(req.body);

                const data = {
                    email, name
                }
                const password: string | any = process.env.JwtPassword

                const jwtToken = await createToken(data, password)


                res.json({
                    status: 1, message: "successful", token: jwtToken
                })
            }

        } catch (error: any) {

            const errorMessage = error.message || error;

            res.json({ status: 0, Error: errorMessage })


        }
    }

    Login = async (req: express.Request, res: express.Response) => {
        try {

            console.log("in login ");
            const { email, password } = req.body;


            const userExist: any = await User.findOne({
                where: {
                    email: email,
                    password: password
                }
            });


            if (userExist) {

                const data = {
                    email, name: userExist.name, id: userExist.id
                }
                const password: string | any = process.env.JwtPassword

                const jwtToken = await createToken(data, password)


                res.json({
                    status: 1, message: "successful", token: jwtToken
                })


            }

            else {

                throw { message: "no user Available" }

            }

        } catch (error: any) {

            console.log("error===>", error);
            const errorMessage = error.message || error;

            res.json({ status: 0, Error: errorMessage })


        }
    }





}


export default new authentication();