import askAI from "@/config/aiconfig"
import { responder } from "@/config/responder"
import genarateInterviewPrompt from "@/lib/ganarateInterviewPrompt"

export const POST = async (request)=>{
      try {
       const {level,topic} = await request.json()
       
        if(!level || !topic){
            return responder("all paramaetes required",null,false,400)
        }
        const prompt = genarateInterviewPrompt(topic,level)
        const response = await askAI(prompt)
       return responder("questions",response,true,200)

      } catch (error) {
          return responder(error.message)
      }
}