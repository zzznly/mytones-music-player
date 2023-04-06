// styles
import "./app.scss";

// router
import { Route, Routes } from "react-router-dom";

// layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

// components
import Home from "./pages/Home";
import Search from "./pages/Search";
import Login from "./pages/Login";
import SearchMain from "./components/Player/PlayerBody/Search/SearchMain";
import SearchResult from "./components/Player/PlayerBody/Search/SearchResult";
import SongList from "./components/Player/PlayerBody/Search/SongList";
import PlaylistDetail from "./pages/DetailPage";

export default function App(): React.ReactElement {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />}>
          <Route index element={<SearchMain />} />
          <Route path="/search/:keyword" element={<SearchResult />}>
            <Route
              path="/search/:keyword/:searchType"
              element={<SongList searchResult={[]} />}
            />
          </Route>
        </Route>
        <Route path="/detail" element={<PlaylistDetail />} />
      </Route>
      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<Login />} />
      </Route>
    </Routes>
  );
}
