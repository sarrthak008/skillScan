import connecToDB from "@/config/connectdb"
import { responder } from "@/config/responder"


export const GET =async()=>{
     try {
         await connecToDB()
         return responder("database is ready...",null,true,200)
     } catch (error) {
        return responder(error.message,null,false,500)
     }
}