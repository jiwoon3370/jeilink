import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Board from "./pages/Board/Board";
import Mentor from "./pages/Mentor/Mentor";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/board" element={<Board />} />
      <Route path="/mentor" element={<Mentor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}