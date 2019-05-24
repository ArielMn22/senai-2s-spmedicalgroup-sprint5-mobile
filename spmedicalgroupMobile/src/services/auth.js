import { AsyncStorage } from "react-native";
import { isTSCallSignatureDeclaration } from "@babel/types";

const USER_KEY = "spmedicalgroup-token";

export default {
  async setItem(value) {
    try {
      return await AsyncStorage.setItem(USER_KEY, JSON.stringify(value));
    } catch (error) {
      // console.error('AsyncStorage#setItem error: ' + error.message);
    }
  },
  async getItem() {
    return await AsyncStorage.getItem(USER_KEY).then(result => {
      if (result) {
        try {
          result = JSON.parse(result);
        } catch (e) {
          // console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, e.message);
        }
      }
      return result;
    });
  },
  async removeItem() {
    return await AsyncStorage.removeItem(USER_KEY);
  },
  async isSignedIn() {
    const token = await getItem().then(res => (token = res));

    return token !== null ? true : false;
  }
};
