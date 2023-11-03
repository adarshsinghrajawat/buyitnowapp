import axios from "axios"
const ServerURL = "http://192.168.178.172:5000"
//{ headers: { Authorization: "Bearer " + localStorage.getItem("TOKEN") } }

const getData = async (url) => {
    try {
        var response = await axios.get(`${ServerURL}/${url}`)
        var result = await response.data
        return result
    }
    catch (e) { return null }
}

const postData = async (url, body) => {
    try {
        var response = await axios.post(`${ServerURL}/${url}`,
            body
           // { headers: { Authorization: "Bearer " + localStorage.getItem("TOKEN") } }
            )

        var result = await response.data
        return result
    }
    catch (e) { return null }
}
export { ServerURL, getData, postData }