import React, { useEffect, useState } from "react";
import Applications from "./Pages/Applications";
import Dashboard from "./Pages/Dashboard";
import Edit from "./Pages/AddNewApp";
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
import AddnewShop from "./Pages/AddNewshop";

// import "./App.css";
function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   console.log("location", location);
  // }, [location]);
  return (
    <>
      <Sidenavmenubar />
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Applications" element={<Applications />} />
          <Route path="/edit/:provider_Id" element={<Edit />} />
          <Route path="/add/:provider_Id" element={<Edit />} />
          <Route
            path="/AuthenticationProvider"
            element={<AuthenticationProvider />}
          />
          <Route
            path="/edit1/:authenticationprovider_Id"
            element={<AddNew3 />}
          />
          <Route
            path="/add1/:authenticationprovider_Id"
            element={<AddNew3 />}
          />
          <Route path="/editShop/:shopify_Id" element={<AddnewShop />} />
          <Route path="/Shopifystores" element={<Shopifystores />} />
          <Route path="/AddNew2" element={<AddnewShop />} />
          <Route path="/editpro/:provider_Id" element={<AddNew4 />} />
          <Route path="/Providers" element={<Providers />} />
          <Route path="/AddNew4" element={<AddNew4 />} />
          <Route path="/AddNew5/:id" element={<ViewAllApp />} />
          <Route path="/AddNew6/:id" element={<ViewAllAut />} />
          <Route path="/AddNew7/:id" element={<ViewAllShop />} />
          <Route path="/AddNew8/:id" element={<ViewAllPro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
