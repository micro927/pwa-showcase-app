// this hook will work with `darkMode: "class"` (put in in tailwind.config.js)

import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export default function useTheme() {

    const [thisTheme, setThisTheme] = useState<Theme>(window?.localStorage?.theme);

    function setTheme(themevalue: "light" | "dark") {
        setThisTheme(themevalue);
        window.localStorage.setItem("theme", themevalue);
    }

    useEffect(() => {
        if (
            window.localStorage.theme === "dark" ||
            (!("theme" in window.localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [thisTheme]);

    return { thisTheme, setTheme }
}