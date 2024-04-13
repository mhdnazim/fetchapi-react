import axios from "axios";



export const commonApi = async (method, url, body) => {
    let reqconfig = {
        method,
        url,
        data: body,
        headers: { "content-type": "application/json" }
    }

    // create axios instance api call

    return await axios(reqconfig).then((response) => {
        return response
    }).catch((err) => {
        return err
    })
}