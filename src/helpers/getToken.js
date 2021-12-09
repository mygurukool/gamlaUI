import AsyncStorage from '@react-native-community/async-storage';

const getToken = async (token) => {
  const tkn = await AsyncStorage.getItem('token');
  return tkn;
};
export default getToken;
