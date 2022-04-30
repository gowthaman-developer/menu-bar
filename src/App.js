import React from "react";
import Applications from "./Pages/Applications";
import Dashboard from "./Pages/Dashboard";
import AddNew1 from "./Pages/AddNewApp";
import AddNew2 from "./Pages/AddNewshop";
import AddNew3 from "./Pages/AddNewaut";
import AddNew4 from "./Pages/Addnewpro";
import ViewAllApp from "./Pages/ViewAllApp";
import ViewAllAut from "./Pages/ViewAllAut";
import ViewAllShop from "./Pages/ViewAllShop";
import ViewAllPro from "./Pages/ViewAllPro";
import AuthenticationProvider from "./Pages/AuthenticationProvider";
import Providers from "./Pages/Providers";
import Shopifystores from "./Pages/Shopifystores";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidenavmenubar from "./Components/Sidenavmenubar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <Sidenavmenubar />
      <Router>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/AddNew1" element={<AddNew1 />} />
          <Route
            path="/AuthenticationProvider"
            element={<AuthenticationProvider />}
          />
          <Route path="/AddNew2" element={<AddNew2 />} />
          <Route path="/Shopifystores" element={<Shopifystores />} />
          <Route path="/AddNew3" element={<AddNew3 />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/AddNew4" element={<AddNew4 />} />
          <Route path="/AddNew5" element={<ViewAllApp />} />
          <Route path="/AddNew6" element={<ViewAllAut />} />
          <Route path="/AddNew7" element={<ViewAllShop />} />
          <Route path="/AddNew8" element={<ViewAllPro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
