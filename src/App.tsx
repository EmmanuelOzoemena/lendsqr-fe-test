import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
// import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";
import Users from "./pages/Users/Users";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Navigate to="/users" />} />
          <Route path="/users" element={<Users />} />
          {/* 
           <Route path="/users/:id" element={<UserDetails />} /> */}
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
