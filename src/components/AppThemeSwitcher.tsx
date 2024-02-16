import { useContext } from 'react';
import { ThemeContext } from './provider/themeProvider';
import { Theme } from '@/constants/theme';
import { CiDark, CiLight } from 'react-icons/ci';
import { cx } from '@emotion/css';

function AppThemeSwitcher({ className = '' }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () =>
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  const ThemeIcons = theme === Theme.DARK ? CiDark : CiLight;

  return (
    <button
      onClick={toggleTheme}
      className={cx(
        'flex h-full w-full min-w-7 items-center justify-center p-1',
        className,
      )}
    >
      <ThemeIcons size={24} />
    </button>
  );
}

export default AppThemeSwitcher;
