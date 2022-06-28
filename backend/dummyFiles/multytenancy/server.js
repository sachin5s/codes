import express from "express"
// import {connectAllDb} from "./controllers/tenancyController.js"
import serviceRoutes from "./routes/serviceRoutes.js"

const app = express();
app.use(express.json())
app.use("/tenant",serviceRoutes)
// app.use("/api/candidate",candidateRoutes)
// app.use("/api/uploadFile",uploadFileRoutes)

// serverPORT
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Express server started at port: ${PORT}`);
});