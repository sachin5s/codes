
const serverToserver =  asyncHandler(async(req,res)=>{


        const findCandidate = await CandidatesData.findById(req.params.id)
        const candId  = req.params.id
        const findCandidateOcean = await  OceanTestResult.findOne({candId : candId})


        if(findCandidate && findCandidateOcean){

          const name = findCandidateOcean.candName
          const candId = req.params.id
          const entityId = req.user.id
          const entityName = req.user.name
          const email = findCandidate.email
         const  mobile = findCandidate.mobile
         const  cvPath  = findCandidate.cvPath
         const  oceanResult = findCandidateOcean.oceanResult
        

    // console.log(oceanResult[0].details[0])
            

            const formData = new FormData()
        
            formData.append("selectedFile", fs.createReadStream(`uploads/${cvPath}`))
            formData.append("name", name)
            formData.append("candId" , candId)
            formData.append("entityId", entityId)
            formData.append("entityName", entityName)
            formData.append("email", email)
            formData.append("mobile",mobile)
            formData.append("cvPath", cvPath)
            formData.append("oScore", oceanResult)   // in mongo saved in array

            const config = {
                headers  : {
                    "content-type":"multipart/form-data"
                }
            }

    const serverReq = await axios.post("http://localhost:8000/api/candidate",formData, config)

        if(serverReq){
    console.log("Candidate Data Sent successfully..!")
        }else{
            console.log("Error Something")
        }
}
 })
 
export {protect,admin, serverToserver}