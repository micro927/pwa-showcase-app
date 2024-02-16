import { Theme } from '@/constants/theme';

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  setThemeToDeviceTheme: () => void;
};
