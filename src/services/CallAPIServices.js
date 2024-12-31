import { getData, postData } from "./ServerServices";

export async function fetchAllCategory() {

    var result = await getData('userinterface/fetch_all_category')
    console.log("12345", result.data)
    return (result.data)

}