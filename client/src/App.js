import React,{useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./screens/login";
import ApplicationForm from "./screens/applicationForm";
import CustomerDashboard from "./screens/customerDashboard";
import AdminLogin from "./screens/adminLogin";
import DepoManagerDashboard from "./screens/depoManagerDashboard";
import ApplicationDetails from "./screens/depoManagerDashboard/components/applicationDetails";
import CustomerApplicationStatus from "./screens/customerDashboard/applicationStatus";
import HodDashboard from "./screens/hodDashboard";
import DoorToDoor from "./screens/doorToDoor";
import DoorToDoorVerification from "./screens/doorToDoorVerification";
import SendSms from "./screens/sendSms";
import TrackYourApplication from "./screens/trackYourApplication";

function App() {
  const [userData, setUserData] = useState("")
  const [applicantData, setApplicantData] = useState("")
  return (
    <>
      <div style={{ background: "#f0f2f7" }}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/application" element={<ApplicationForm />} />
            <Route path="/customerDashboard" element={<CustomerDashboard userData={userData}/>} />
            <Route path="/adminLogin" element={<AdminLogin />} />
            <Route
              path="/depoManagerDashboard"
              element={<DepoManagerDashboard setApplicantData={setApplicantData}/>}
            />
            <Route
              path="/applicationDetails"
              element={<ApplicationDetails applicantData={applicantData}/>}
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
             <Route
              path="/doorToDoor"
              element={<DoorToDoor/>}
            />
            <Route
              path="/doorToDoorVerification"
              element={<DoorToDoorVerification/>}
            />
            <Route
              path="/sendSms"
              element={<SendSms/>}
            />
            <Route
              path="/trackYourApplication"
              element={<TrackYourApplication setUserData={setUserData}/>}
            />
          </Routes>
        </Router>
      </div>
      {/* <SignatureComponent/> */}
    </>
  );
}

export default App;
