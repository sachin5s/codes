import asyncHandler from "express-async-handler"
import axios from "axios";


// dabhishek@mcassociates.co.in



//in email we can also add  (cc, bcc, sub, attachment , html,  etc)

const sendEmail = asyncHandler(async(req,res)=>{

        await axios({
            method :"POST",
            url : "https://api.msg91.com/api/v5/email/send",
            headers : {
                contentType : "application/JSON",
                Accept : "application/json"
            },
            data :{
                "to": [
                  {
                    "name": "hemant",
                    "email": "sachinram4968@gmail.com"
                  }
                ],
                "from": {
                  "name": "sachin",
                  "email": "info@n7q9sc.mailer91.com"  //  we can use any name before @
                },
                "domain": "n7q9sc.mailer91.com",   // we can create own domain in msg91 email section
                "mail_type_id": "1",  //mail type PROMOTIONAL OR TRANSACTIONAL
                "template_id": "BFSILOGIN", 
                "variables": {          //when we create template we can use many variables(eg. name, id, email) ,  then we give their value here dynamicaly
                  "name ": "Mark",
                  "id": "64354",
                  "password":"6454654"
                },
                "authkey": "379262AlpMeb6U62c6ae11P1"
              }
        }).then(res =>console.log(res))
        .catch(err => console.log(err))
    })
    
    export default sendEmail;