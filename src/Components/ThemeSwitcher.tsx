import useTheme from "../utils/useTheme";

function ThemeSwitcher() {
  const { thisTheme, setTheme } = useTheme();
  return (
    <div>
      <p>
        Display website in{" "}
        <span className="capitalize">{thisTheme ?? "system"}</span> theme
      </p>
      <div className="mt-2">
        <button
          type="button"
          role="button"
          className="rounded-r-none"
          aria-pressed={thisTheme === "light"}
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          type="button"
          role="button"
          className="rounded-l-none"
          aria-pressed={thisTheme === "dark"}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
