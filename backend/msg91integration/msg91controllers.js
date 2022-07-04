import asyncHandler from "express-async-handler"
import axios from "axios"


// sms
const sendSms = asyncHandler(async(req,res) =>{

  await  axios({
        url : "https://api.msg91.com/api/v5/flow/",
        method : "POST",
        headers : {
            authkey:"378931AzRa8jpc62bec345P1dsfjk" ,
            contentType:"application/JSON"
        },
        data: {
            flow_id: "62bece479f0a24555469e8d6",
            sender: "SMSIND",
                mobiles: "9326455019",
                message: "sachinram here",
                VAR2: "sachinram here"
          }
    })
    .then((e)=>{
        console.log(e.data)
    })
    .catch((e)=>{
        console.log("error",e)
    })


})


export default sendSms;

// ...OTP
const sendOTP = asyncHandler(async(req,res)=>{

    await axios({
            method : "GET",
            url : "https://api.msg91.com/api/v5/otp",
            headers : {
                contentType : "application/json"},
            params : {
                template_id:"123141324242",
                mobile : "919326455019",
                authkey : "378931AzRa8jpc62bec345P1dsfjk"
            }
    }).then(res => console.log(res))
    .catch(err => console.log(err))
})


export default sendOTP;


//whatsappmessage  ..number integration required
const whatsappMessage  = asyncHandler(async(req,res)=>{

        await axios({
            method : "POST",
            url : "https://api.msg91.com/api/v5/whatsapp/whatsapp-outbound-message/",
            headers : {
                contentType: "application/json"
            },
            data :{
                "integrated_number": "919326455019",
                "recipient_number": "9137955785",
                "content_type": "text",
                "text": "Hi sachin ram is here...!",
                "authkey": "378931AzRa8jpc62bec345P1"
              }
        }).then(e => console.log(e))
        .catch(j => console.log(j))
})


export default whatsappMessage;

                    //DLT required..!
const sendEmail = asyncHandler(async(req,res)=>{

    await axios({
        method :"POST",
        url : "https://api.msg91.com/api/v5/email/send",
        headers : {
            contentType : "application/JSON",
            Accept : "application/json"
        },
        data : {
            "to":[
                {
                    "name" : "narayan",
                    "email" : "narayanram7652@gmail.com"
                }
            ],
            "from":{
                "name" : "sachin",
                "email" : "sachinram4968@gmail.com"
            },
            "template_id":"123141324242",
            "authkey": "378931AzRa8jpc62bec345P1"
        }
    }).then(e =>console.log(e))
    .catch(e=> console.log(e))
})

export default sendEmail;