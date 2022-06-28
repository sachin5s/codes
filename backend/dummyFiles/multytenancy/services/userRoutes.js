import { connectAllDb} from "../controllers/tenancyController.js";
import initTenantDBConnection from "../config/tenantConnectDB.js"
import {createUser,getAllUsers} from "../services/user.js";
import userSchema from "../model/userModel.js";

const login = async(req,res)=>{

  const {name ,email,company} = req.body

  try{
        const tenantData =  await connectAllDb()
        const findTenant =  await tenantData.map((tenant => {
          if(tenant.name === company){
            return {
              [tenant.name]: initTenantDBConnection(tenant.dbURI) 
          }}}))         
          .reduce((prev, next) => {
            return Object.assign(prev, next);
          }, {});  

           const foundTenant = await findTenant[company] 
    
        const UserModel = await foundTenant.model("User", userSchema)

        const userData = await UserModel.findOne({email})

    if(userData.email === email ){
      res.json(userData)
      console.log("your Login Data", userData)
    }       
  }catch{
      console.log("error in Login")
  }
}


const signUp = async (req, res) => {
  const {name ,password, email, phoneNumber,company} = req.body;

    const tenantData =  await connectAllDb()
    const findTenant =  await tenantData.map((tenant => {
      if(tenant.name === company){
        return {
          [tenant.name]: initTenantDBConnection(tenant.dbURI) 
      }}
      }))         
      .reduce((prev, next) => {
        return Object.assign(prev, next);
      }, {});  

       const foundTenant = await findTenant[company];

       if(foundTenant != null){
        const user = await createUser(foundTenant, req.body); 
        res.status(200).json({ success: true, user });
       }else{
          res.status(404).json({message : "Enter valid Property"})
       }
      
     
      };

// const fetchAllData = async (req, res) => {
//   try {
//     const dbConnection = getConnection();
//          console.log("fetchAll dbConnection", dbConnection.name);
//     const users = await getAllUsers(dbConnection);
//     res.status(200).json({ success: true, users });
//   } catch (err) {
//     console.log("fetchAll error", err);
//     res.status(err.statusCode || 500).json({error: err.message });
//   }
// };

export { signUp ,login };
