import {
  DarkTheme as NavDarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

export const fontSizes = {
  small: 12,
  medium: 16,
  large: 24,
  headline: 32,
};

export const spacing = {
  tiny: 4,
  small: 8,
  smallMedium: 12,
  medium: 16,
  large: 24,
  huge: 32,
};

export const colors = {
  light: {
    background: '#cc99cc',
    button: '#993399',
    buttonPressed: '#aa66aa',
    subtitle: '#662266',
    text: '#330033',
  },
  dark: {
    background: '#330033',
    button: '#993399',
    buttonPressed: '#662266',
    subtitle: '#aa66aa',
    text: '#cc99cc',
  },
};

export interface CustomTheme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    button: string;
    buttonPressed: string;
    subtitle: string;
  };
}

export const LightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors.light,
    primary: colors.light.background,
  },
};

export const DarkTheme = {
  ...NavDarkTheme,
  colors: {
    ...NavDarkTheme.colors,
    ...colors.dark,
    primary: colors.dark.background,
  },
};
