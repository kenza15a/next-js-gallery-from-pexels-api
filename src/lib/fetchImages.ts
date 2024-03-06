import { ImagesResults } from "@/models/Images";
import { ImagesSchemaWithPhotos } from "@/models/Images";
import { error } from "console";
import { url } from "inspector";
import { parse } from "path";
import { promise, string } from "zod";
import env from "./env";
export default async function fetchImages(url: string): Promise<ImagesResults| undefined> {
  try{
const res=await fetch(url,{
    headers:{
        Authorization:env.PEXELS_API_KEY,
    }
})
if(!res.ok)throw new Error("fetch not working")
const ImagesResults:ImagesResults=await res.json()
// console.log(ImagesResults)
const parsedData=ImagesSchemaWithPhotos.parse(ImagesResults);
if(parsedData.total_results===0) return undefined
// console.log(parsedData);
return parsedData;
  }catch(e){
    //according to the error w will console in the terminal 
    if(e instanceof Error) console.log(e.stack);

  }
 
}
