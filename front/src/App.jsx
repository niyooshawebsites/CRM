import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LeadsDashboard from "./pages/LeadsDashboard";
import ProspectDashboard from "./pages/ProspectDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import Layout from "./comps/Layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/leads-dashboard" element={<LeadsDashboard />} />
            <Route path="/prestect-dashboard" element={<ProspectDashboard />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
