import { NavLink } from "react-router-dom";
import { AppRouting } from "pages";
import { useTheme } from "./providers/theme";
import "./styles/global.scss";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/main">Main</NavLink>
      </nav>
      <AppRouting />
    </div>
  );
};

export default App;
