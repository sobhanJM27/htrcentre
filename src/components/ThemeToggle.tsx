import useTheme from "../hooks/useTheme";
import MoonStar from "./ui/icons/MoonStar";
import Sun from "./ui/icons/Sun";
import IconWrapper from "./ui/IconWrapper";

const ThemeToggle = () => {
  const { theme: isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="transition-all duration-300 text-muted-foreground"
    >
      {isDark ? (
        <IconWrapper className="p-2">
          <MoonStar className="w-5 h-5" />
        </IconWrapper>
      ) : (
        <IconWrapper className="p-2">
          <Sun className="w-5 h-5" />
        </IconWrapper>
      )}
    </button>
  );
};

export default ThemeToggle;
