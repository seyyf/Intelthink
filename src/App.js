import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./components/Sidebar";
import Cars from "./pages/Cars";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="flex">
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cars" element={<Cars />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
