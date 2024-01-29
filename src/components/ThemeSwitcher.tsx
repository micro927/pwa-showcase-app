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
          className="rounded-r-none"
          aria-pressed={theme === Theme.LIGHT}
          onClick={() => setTheme(Theme.LIGHT)}
        >
          Light
        </button>
        <button
          type="button"
          role="button"
          className="rounded-l-none"
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
