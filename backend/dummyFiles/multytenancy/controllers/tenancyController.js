// import {getNamespace} from  "continuation-local-storage"

import initAdminDBConnection from "../config/AdminConnectDB.js"
import initTenantDBConnection from "../config/tenantConnectDB.js"
import {getAllTenants} from "./tenentServiceController.js"


// let connectionMap;
let adminDbConnection;


const connectAllDb = async () => {
  let tenants;
  adminDbConnection = initAdminDBConnection("mongodb://localhost:27017/AdminData");
  console.log("Admin Database Connected");

  try {
    tenants = await getAllTenants(adminDbConnection);
    if(tenants){
      return tenants
    }
  } catch (e) {
    console.log("connectAllDb error", e);
    return;
  }};



export {
  connectAllDb,
};