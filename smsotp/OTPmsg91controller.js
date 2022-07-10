import axios from "axios";
import asyncHandler from "express-async-handler"

const sendOTP = asyncHandler(async(req,res)=>{

    await axios({
            method :"GET",
            url : "https://api.msg91.com/api/v5/otp",
            headers : {
                "Content-Type" : "application/json"},
            params : {
                template_id:"62c6cb221126fd5e5828a563",
                mobile :"918828222740",
                authkey :"379262AlpMeb6U62c6ae11P1",
                DLT_TE_ID : "1707165294270146402"
                },
                // data : {"Value1":"Param1","Value2":"Param2","Value3":"Param3"},      not required
    }).then(res => console.log(res))
    .catch(err => console.log(err))
})

export default sendOTP;



// Varify OTP
const varifyOTP = asyncHandler(async(req,res)=>{
    
    await axios({
        method : "GET",
        url :"https://api.msg91.com/api/v5/otp/verify",
        params  : {
            otp : "6145",
            authkey : "379262AlpMeb6U62c6ae11P1",
            mobile : "919326455019"
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
})


export default varifyOTP;




// resendOTP
const resendOTP = asyncHandler(async(req,res)=>{

        await axios({
            method :  "GET",
            url : "https://api.msg91.com/api/v5/otp/retry",
            params : {
            authkey : "379262AlpMeb6U62c6ae11P1",
            retrytype : "text", //default is voice
            mobile : "919326455019"
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
})

export default resendOTP