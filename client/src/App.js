import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./screens/login";
import ApplicationForm from "./screens/applicationForm";
import CustomerDashboard from "./screens/customerDashboard";
import AdminLogin from "./screens/adminLogin";
import DepoManagerDashboard from "./screens/depoManagerDashboard";
import ApplicationDetails from "./screens/depoManagerDashboard/components/applicationDetails";
import CustomerApplicationStatus from "./screens/customerDashboard/applicationStatus";
import HodDashboard from "./screens/hodDashboard";

function App() {
  return (
    <>
      <div style={{ background: "#f0f2f7" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/application" element={<ApplicationForm />} />
            <Route path="/customerDashboard" element={<CustomerDashboard />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route
              path="/depoManagerDashboard"
              element={<DepoManagerDashboard />}
            />
            <Route
              path="/applicationDetails"
              element={<ApplicationDetails />}
            />
            <Route
              path="/applicationStatus"
              element={<CustomerApplicationStatus />}
            />
            <Route path="/hodDashboard" element={<HodDashboard />} />
            <Route
              path="/hodDasAppDetails"
              element={<CustomerApplicationStatus rev={true} />}
            />
          </Routes>
        </Router>
      </div>
      {/* <SignatureComponent/> */}
    </>
  );
}

export default App;
