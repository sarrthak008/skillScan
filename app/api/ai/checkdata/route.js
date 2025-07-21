import askAI from "@/config/aiconfig"
import { responder } from "@/config/responder"
import checkInterviewPrompt from "@/lib/chechInterviewPrompt"

export const POST = async (request) => {

    try {
      let {usersubmission,roundType} = await request.json()
      const prompt = checkInterviewPrompt(usersubmission,roundType)
      const result = await askAI(prompt)
      if(!result){
        return responder("something went wrong please try latter",null,fasle,400)
      }
      return responder("result ganarated successfully",result,true,200)
      
    } catch (error) {
        return responder(error.message,null,false,400)
    }

}