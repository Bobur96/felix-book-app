import Home from "./pages/home";
import Auth from "./pages/auth";
import NotFound from "./pages/not-found";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";


function App() {
  const token = sessionStorage.getItem('token');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(location.pathname);
  }, []);

  return (
    <div className="App">
      {token ? (
        <Routes>
          {["/", "/home"].map((path) => (
            <Route key={path} path={path} element={<Home />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      ) : (
        <Routes>
          {["/", "/auth", "/login"].map((path) => (
            <Route key={path} path={path} element={<Auth />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
