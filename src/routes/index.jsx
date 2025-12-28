import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Board from "../pages/Board/Board";
import BoardDetail from "../pages/Board/BoardDetail";
import Mentor from "../pages/Mentor/Mentor";
import NotFound from "../pages/NotFound";

import PrivateRoute from "./PrivateRoute";

import DevLogin from "../pages/DEV/DevLogin";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dev-login" element={<DevLogin />} />
      <Route path="/board" element={<PrivateRoute><Board /></PrivateRoute>}/>
      <Route path="/board/:id" element={<PrivateRoute><BoardDetail /></PrivateRoute>}/>

      <Route
        path="/board"
        element={
          <PrivateRoute>
            <Board />
          </PrivateRoute>
        }
      />

      <Route
        path="/mentor"
        element={
          <PrivateRoute>
            <Mentor />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
