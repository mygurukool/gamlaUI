import AsyncStorage from '@react-native-community/async-storage';

const removeToken = async (token) => {
  const tkn = await AsyncStorage.removeItem('token');
  return tkn;
};
export default removeToken;
