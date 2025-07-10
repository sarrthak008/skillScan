import { NextResponse } from "next/server";

export const responder =(message="skillscan is working fine",data=null,success=true,status=200)=>{
     return NextResponse.json({
         message:message,
         data:data,
         success:success
     },{status:status})
}

