import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/Homepage";
import LoginPage from "./pages/login/Loginpage";
import RegisterPage from "./pages/register/Registerpage";

// Toast Config 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./pages/admin/admin_dashboard/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />

        {/* Admin routes */}
        <Route path ='admin/dashboard' element = {<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;