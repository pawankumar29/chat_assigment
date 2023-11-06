import jwt from "jsonwebtoken"
import constant from "../../constant/constant";

export async function createToken(payload: Object, password: string) {
    return await jwt.sign(payload, password,{
        expiresIn:'1h'
    });
}


export async function verifyToken(token: string) {

    const password: string | any = process.env.JwtPassword;
    const jwtDecoded: any = await jwt.verify(token, password);
    if (jwtDecoded)
        return { status: 1, data: jwtDecoded };
    else
        return { status: 0, message: constant.JWT_ERROR };


}