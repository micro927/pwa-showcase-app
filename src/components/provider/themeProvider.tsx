import { THEME_STORAGE_KEY, Theme } from '@/constants/theme';
import { ThemeContextType } from '@/types/themeContext';
import { ReactNode, createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.LIGHT,
  setTheme: () => undefined,
  setThemeToDeviceTheme: () => undefined,
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const getStorageTheme = () => {
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return theme ? (theme as Theme) : undefined;
  };

  const setThemeClass = (theme: Theme) => {
    const htmlClassList = document.documentElement.classList;
    if (theme === Theme.DARK) {
      htmlClassList.add(Theme.DARK);
    } else {
      htmlClassList.remove(Theme.DARK);
    }
  };

  const setTheme = (theme: Theme) => {
    setAppTheme(theme);
    setThemeClass(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  };

  const setThemeToDeviceTheme = () => setTheme(deviceTheme);

  const storageTheme = getStorageTheme();

  const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? Theme.DARK
    : Theme.LIGHT;

  const [appTheme, setAppTheme] = useState<Theme>(storageTheme ?? Theme.LIGHT);

  useEffect(
    () => {
      setTheme(storageTheme ?? deviceTheme);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <ThemeContext.Provider
      value={{
        theme: appTheme,
        setTheme,
        setThemeToDeviceTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
