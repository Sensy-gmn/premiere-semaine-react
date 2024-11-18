import { useState } from "react";

export default function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    const handleClick = () => {
        setIsDark(!isDark);
    };

    return <button onClick={handleClick}>{isDark ? "Light" : "Dark"}</button>;
}
