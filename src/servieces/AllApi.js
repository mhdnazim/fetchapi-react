import { BASE_URL } from "./Baseurl"
import { commonApi } from "./commonApi"

// get data 
export const getMovies=async()=>{
    return await commonApi("GET",`${BASE_URL}/products`,"")
}