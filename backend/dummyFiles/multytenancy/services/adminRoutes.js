// // import { getConnection } from "../controllers/tenancyController.js";
import { createTenant ,getAllTenants} from "../controllers/tenentServiceController.js";
import initAdminDBConnection from "../config/AdminConnectDB.js"

const create = async(req, res) => {
  const {name} = req.body
  try {
    console.log("errrorr")
    const dbConnection =  await initAdminDBConnection()
    const tenant = await createTenant(dbConnection, req.body);
    res.status(200).json({ success: true, tenant });
  } catch (err) {
    console.log("signUp error", err);
    res.status(err.statusCode || 500).json({ error: err.message });
  }
};

const fetchAll = async (req, res) => {
  try {
    const dbConnection =  await initAdminDBConnection()
    const tenants = await getAllTenants(dbConnection);
    res.status(200).json({ success: true, tenants });
  } catch (err) {
    console.log("fetchAll error", err);
    res.status(err.statusCode || 500).json({ error: err.message });  
  }
};
export { create, fetchAll };