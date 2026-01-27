import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashboardLayout from "./layout/DashboardLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/users" element={<UsersPage />} />
           <Route path="/users/:id" element={<UserDetails />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
