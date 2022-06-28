import express from "express"
// import {resolveTenant,setAdminDb} from "../controllers/adminTentancyController.js"
import {create,fetchAll} from "./adminRoutes.js"
import {signUp,login} from "./userRoutes.js"

const router = express.Router();


// admin
router.post("/admin/tenant", create);
router.get("/admin/tenant", fetchAll);

 // user
    router.post("/tenant/user/signup", signUp);
    // router.get("/tenant/user", fetchAllData);
router.get("/tenant/user/login",login)

export default router;