import mongoose from "mongoose";
mongoose.Promise = global.Promise

const clientOption = {
    socketTimeoutMS : 30000,
    keepAlive : true,
    useNewUrlParser : true,
    useUnifiedTopology : true,

}

mongoose.connection.on("connected",()=>{
console.log("Mongoose default connection is Open")
})

mongoose.connection.on("error",(err)=>{
    console.log("Mongoose default connection error:" + err)
})

mongoose.connection.on("disconnected", ()=>{
    console.log("Mongoose default connection is Disconnected")
})

process.on("SIGINT",()=>{
    mongoose.connection.close(()=>{
        console.log(
            "Mongoose Default connection disconnected  through app termination"
        )
        process.exit(0)
    })
})


const initAdminDBConnection  = () =>{
            try {
                const db = mongoose.createConnection("mongodb://localhost:27017/AdminData",clientOption)

                db.on(
                    "error",
                    console.error.bind(
                        console,
                        "Init Admin DB connection MongoDB Connection Error"
                    )
                );
                db.once("open",()=>{
                    console.log("initAdminDbConnection client MongoDB Connection ok!")
                })
                return db
            }catch(error){
                console.log("InitAdminDbConnection error",error);
            }
        }

        export default initAdminDBConnection;