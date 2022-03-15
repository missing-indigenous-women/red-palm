import {NextFunction, Request, Response} from "express";
//import {uploadToCloudinary} from "../utils/cloudinary.utils";

export async function imageUploadController(request: Request, response: Response, nextFunction: NextFunction) {
    try {
        // uncomment if in production
       // const message : string = await uploadToCloudinary(request)
        const message : string =  "https://res.cloudinary.com/redpalm/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1647114966/redPalm%20avatars/eagle_tjznbz.svg"
        return response.json({status: 200, data: null, message: message})
    } catch (error: any) {
        return response.json({status:400, message: error.message, data: null})
    }
}
