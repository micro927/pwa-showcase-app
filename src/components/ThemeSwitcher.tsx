import { useContext } from 'react';
import { ThemeContext } from './provider/themeProvider';
import { Theme } from '@/constants/theme';

function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>
        Display website in{' '}
        <span className="capitalize">{theme ?? 'system'}</span> theme
      </p>
      <div className="mt-2">
        <button
          type="button"
          role="button"
          className="rounded-xl rounded-r-none border border-primary p-2 aria-pressed:bg-gray-400 dark:border-white"
          aria-pressed={theme === Theme.LIGHT}
          onClick={() => setTheme(Theme.LIGHT)}
        >
          Light
        </button>
        <button
          type="button"
          role="button"
          className="rounded-xl rounded-l-none border border-primary p-2 aria-pressed:bg-gray-400 dark:border-white"
          aria-pressed={theme === Theme.DARK}
          onClick={() => setTheme(Theme.DARK)}
        >
          Dark
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
