import AsyncStorage from '@react-native-community/async-storage';

const setToken = async (token) => {
  const tkn = await AsyncStorage.setItem('token', token);
  return tkn;
};
export default setToken;
