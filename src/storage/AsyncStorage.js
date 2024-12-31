import AsyncStorage from "@react-native-community/async-storage"
export const storeData = async (key, body) => {
   try {
      console.log(body)
      await AsyncStorage.setItem(key, JSON.stringify(body))
   } catch (e) {
      console.log("Error for " + key, e)
   }

}
export const getKey = async (key) => {
   try {

      var keys = await AsyncStorage.getAllKeys(key)
      console.log("Keys:", keys)
      return keys[0]
   } catch (e) {
      console.log("Error for " + keys, e)
      return null
   }

}
export const getStoreData = async (key) => {
   try {
      var data = await AsyncStorage.getItem(key)
      console.log("DATA ASYNC:", data)
      return (JSON.parse(data))
   } catch (e) {
      return null
      console.log("Error for " + key, e)
   }

}

export const removeStoreData = async (key) => {
   try {
      await AsyncStorage.removeItem(key)

   } catch (e) {
      console.log("Error for " + key, e)
   }

}
