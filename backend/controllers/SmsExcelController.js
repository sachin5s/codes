import xlsx from "xlsx"
import path from "path"
// import {MongoClient} from "mongodb"
import sgMail from "@sendgrid/mail"



const excelFile = async(req,res) =>{
      
    const {email} = req.body;

    const __dirname = path.resolve()

    const filePath  = path.resolve(__dirname,"sachincsv.xlsx")

const file =  xlsx.readFile(filePath)

const data = []



const sheets = file.SheetNames[0]

try{
for(let i=0; i < file.SheetNames.length ; i++){

    const temp = await xlsx.utils.sheet_to_json(
        file.Sheets[file.SheetNames[i]]
    )
console.log(temp)
   temp.forEach((res)=>{     
     data.push(res)
   })
  }

 console.log("Data Inserted !!  data variable")

  }catch(error){
      console.log(error.message)
  }


// var url = "mongodb://localhost:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("app1");
//   dbo.collection("xlFile").insertMany(data, function(err, res) {
//     if (err) throw err;
//     console.log("Excel Data Inserted");
//     db.close();
//   });
// });




 const htmldata = `<table  width="100%" style="border:2px solid #6b6b47; border-collapse:collapse ; background-color : #d8d8f2"><caption>Your Informations</caption><tr> `

 
 const tKey = Object.keys(data[0])

 let val = ``

    try{
   const newdata = tKey.forEach((e)=>{
       val =  val.concat(`<th  style="border:1px solid white; color:#ed0909">${e}</th>`)
    })

  
    }catch{
        console.log("error accur")
    }

    let td = htmldata + val +`</tr>`
    

  let  tad = ``



     const tableData =  data.forEach((val)=>{

         for(let i=0; i<Object.keys(val).length; i++){

            if(i==0){
           tad = tad.concat(`<tr><td style="border:1px solid white ;text-align:left;  color:#0cf2d7">${Object.values(val)[i]}</td>`)
            }else if(i=== Object.keys(val).length - 1){
                tad = tad.concat(`<td style="border:1px solid white ;text-align:left;  color:#0cf2d7">${Object.values(val)[i]}</td></tr>`)
            }else{
                tad = tad.concat(`<td style="border:1px solid white ;text-align:left;  color:#0cf2d7">${Object.values(val)[i]}</td>`)
            }
        }
     })



   const  lasthtml = td + tad + `</table>`


// console.log(lasthtml)



sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: `${email}`,
  from: 'sachinram4968@gmail.com', 
  subject: `MC associates :`,
html: lasthtml,
};

(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  }
})();
}

export default excelFile;