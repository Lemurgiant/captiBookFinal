import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import AppLayout from "./layouts/AppLayout";
import HabitTrackerPage from "./pages/HabitTrackerPage";
import BookInsightsPage from "./pages/BookInsightsPage";
import LibraryPage from "./pages/LibraryPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProtectedRoutes from "./layouts/ProtectedRoute";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { origTheme, testTheme } from "./constants/ColorTheme";
import {
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterLayout from "./layouts/RegisterLayout";
import useAuthApi from "./hooks/queries/useAuthApi";

Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function App() {
  const AppThemes = {
    0: origTheme,
    1: testTheme,
  };
  const { userInfo } = useAuthApi();
  const [theme, setTheme] = useState<any>(AppThemes[0]); // Default to theme 0 initially

  useEffect(() => {
    if (userInfo && userInfo.theme !== undefined) {
      setTheme(AppThemes[userInfo.theme as 0 | 1]);
    }
  }, [userInfo]);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<RegisterLayout />}>
            <Route element={<ProtectedRoutes needAuth={false} />}>
              <Route path="/signup" element={<SignUpPage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<AppLayout withSidebar={true} />}>
            <Route element={<ProtectedRoutes needAuth={true} />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/habittracker" element={<HabitTrackerPage />} />
              <Route path="/bookinsights" element={<BookInsightsPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
