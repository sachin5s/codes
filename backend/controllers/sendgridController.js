import {sgMail} from "@sendgrid/mail"

const sgMail = require('@sendgrid/mail');


const sendSMS = async() =>{

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'narayana474@gmail.com',
  from: 'sachinram4968@gmail..com', 
  subject: 'Hi Narayana...',
  text: 'all things i written in html',
  html: '<h2>djdjdjkfhfonfjfhknfinddndnf</h2><p>we can write table here also</p>',
};
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });


}


export default sendSMS