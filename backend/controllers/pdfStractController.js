import {PDFExtract} from "pdf.js-extract"

const pdfRead = async(req,res) =>{

const pdfExtract = new PDFExtract()
const option = {}
// const option = {
//     firstPage: Number,  // default:`1` - start extract at page nr
//     lastPage: Number,   //  stop extract at page nr, no default value
//     password: String,   //  for decrypting password-protected PDFs., no default value
//     verbosity: Number,  // default:`-1` - log level of pdf.js
//     normalizeWhitespace: Boolean, // default:`false` - replaces all occurrences of whitespace with standard spaces (0x20).
//     disableCombineTextItems: Boolean,
// }

try{
    pdfExtract.extract("COMPANY STUCK OFF LIST-BIHAR.pdf", option, async(err, data) => {
        if (err) {
            console.log("error something", err)
        } else {
              const extractData= []

            const newData = data.pages

            for(let i= 0; i < data.pages.length ; i++){

                const val =  newData[i].content

                for(let j=0 ; j<val.length; j++){
                     
                extractData.push(val[j].str)
                }
            }
            console.log(extractData)
            res.json(extractData)
        }
    })
}catch(error){
    console.log("error message here",error)
}
}

export default pdfRead;
