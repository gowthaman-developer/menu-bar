import React from "react";
import Applications from "./Pages/Applications";
import Dashboard from "./Pages/Dashboard";
import AuthenticationProvider from "./Pages/AuthenticationProvider";
import Providers from "./Pages/Providers";
import Shopifystores from "./Pages/Shopifystores";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenavmenubar from "./Components/Sidenavmenubar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Sidenavmenubar />
      <Router>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Applications" element={<Applications />} />
          <Route
            path="/AuthenticationProvider"
            element={<AuthenticationProvider />}
          />
          <Route path="/Shopifystores" element={<Shopifystores />} />
          <Route path="/Providers" element={<Providers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
