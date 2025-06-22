import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    }) ;
    const uploadOncloudiary =async (localfilepath)=>{
        try{
            if(!localfilepath) return null
            const response = await cloudinary.uploader.upload(localfilepath,{
                resource_type:"auto"
            })
            console.log("file upload successfully",response.url);
            return response;
            //file has been upload successgfully 
        }catch(error){
          fs.unlinkSync(localfilepath) //remove the local saved file as the upload opration failed
          return null  
        }
    } 
    export {uploadOncloudiarycurl}