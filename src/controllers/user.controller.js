 import {asyncHandler} from "../utiles/asyncHandler";

 const registerUser= asyncHandler( async(req, res)=>{
   return res.status(200).json({
        message: "Hello world"
    })
 })

 export {registerUser}