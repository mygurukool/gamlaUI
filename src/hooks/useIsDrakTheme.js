import {useColorScheme} from 'react-native';

const useIsDrakTheme = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return isDarkMode;
};

export default useIsDrakTheme;
