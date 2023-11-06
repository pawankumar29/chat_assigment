
import {body} from 'express-validator';
import constant from '../../constant/constant';

class  authValidation{

    public signUpBody=[
        body("name")
        .notEmpty()
        .withMessage(constant.NAME_ERROR),
        body("age")
        .notEmpty()
        .withMessage(constant.AGE_ERROR),
        body("email")
        .notEmpty()
        .withMessage(constant.EMAIL_ERROR),
        body("password")
        .notEmpty()
        .withMessage(constant.PASSWORD_ERROR)
    ]
   
 
    public loginBody=[
        body("email")
        .notEmpty()
        .withMessage(constant.EMAIL_ERROR),
        body("password")
        .notEmpty()
        .withMessage(constant.PASSWORD_ERROR)
       
    ]


}


export  default  new authValidation();