import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import AppLayout from "./layouts/AppLayout";
import HabitTrackerPage from "./pages/HabitTrackerPage";
import BookInsightsPage from "./pages/BookInsightsPage";
import LibraryPage from "./pages/LibraryPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import ProtectedRoutes from "./layouts/ProtectedRoute";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import { ColorResult } from "react-color";
import { invertedTheme, origTheme, testTheme } from "./constants/ColorTheme";
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

const hexToHsb = (hex: any) => {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char: any) => char + char)
      .join("");
  }
  const num = parseInt(hex, 16);
  let r = (num >> 16) & 255;
  let g = (num >> 8) & 255;
  let b = num & 255;

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;

  let h,
    s,
    v = max;

  if (delta === 0) {
    h = 0;
  } else if (max === r) {
    h = ((g - b) / delta) % 6;
  } else if (max === g) {
    h = (b - r) / delta + 2;
  } else {
    h = (r - g) / delta + 4;
  }

  h = Math.round(h * 60);
  if (h < 0) h += 360;

  s = max === 0 ? 0 : delta / max;
  s = +(s * 100).toFixed(1);
  v = +(v * 100).toFixed(1);

  return { h, s, b: v };
};

const hsbToHex = (h, s, b) => {
  s /= 100;
  b /= 100;

  const k = (n) => (n + h / 60) % 6;
  const f = (n) => b - b * s * Math.max(Math.min(k(n), 4 - k(n), 1), 0);

  const r = Math.round(f(5) * 255);
  const g = Math.round(f(3) * 255);
  const bColor = Math.round(f(1) * 255);

  return `#${((1 << 24) + (r << 16) + (g << 8) + bColor)
    .toString(16)
    .slice(1)}`;
};
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
