// routes
import LoadingScreen from "./components/LoadingScreen";
import NotistackProvider from "./components/NotistackProvider";
import ScrollToTop from "./components/ScrollToTop";
// components
import Settings from "./components/settings";
import ThemeLocalization from "./components/ThemeLocalization";
import ThemePrimaryColor from "./components/ThemePrimaryColor";
// hooks
import useAuth from "./hooks/useAuth";
import Router from "./routes";
// theme
import ThemeConfig from "./theme";

// ----------------------------------------------------------------------

const App = () => {
  const { isInitialized } = useAuth();

  return (
    <ThemeConfig>
      <ThemePrimaryColor>
        <ThemeLocalization>
          <NotistackProvider>
            <ScrollToTop />
            {isInitialized ? <Router /> : <LoadingScreen />}
          </NotistackProvider>
        </ThemeLocalization>
      </ThemePrimaryColor>
    </ThemeConfig>
  );
};

export default App;
