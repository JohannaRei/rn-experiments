import {useColorScheme} from 'react-native';
import {DarkTheme, LightTheme, CustomTheme} from './constants';
import useStore from '../state/store';

function useTheme(): CustomTheme {
  const deviceTheme = useColorScheme();
  const {darkMode, setDarkMode} = useStore();

  if (darkMode === null) {
    setDarkMode(deviceTheme === 'dark');
  }

  return darkMode ? DarkTheme : LightTheme;
}

export default useTheme;
