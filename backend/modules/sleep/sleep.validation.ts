
import { body } from 'express-validator';
import constant from '../../constant/constant';




class sleepValidation {

    public recordAddBody = [
        body("wake_up_time")
            .notEmpty()
            .withMessage(constant.WAKE_TIME_ERROR),
        body("sleep_time")
            .notEmpty()
            .withMessage(constant.SLEEP_TIME_ERROR),
        body("total_time")
            .notEmpty()
            .withMessage(constant.TOTAL_TIME_ERROR),

    ]

    public decodeJwtBody = [
        body("token")
            .notEmpty()
            .withMessage(constant.TOKEN_ERROR),


    ]
    public editRecordBody = [
        body("wake_up_time")
            .notEmpty()
            .withMessage(constant.WAKE_TIME_ERROR),
        body("sleep_time")
            .notEmpty()
            .withMessage(constant.SLEEP_TIME_ERROR),
        body("total_time")
            .notEmpty()
            .withMessage(constant.TOTAL_TIME_ERROR),

    ]

}

export default new sleepValidation();