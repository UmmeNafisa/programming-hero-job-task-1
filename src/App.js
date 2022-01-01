import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';

import Home from './components/Home/Home';
import RegisterRider from './components/Login/Register/RegisterRider';
import RegisterDrivingLearner from './components/Login/Register/RegisterDrivingLearner';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register-rider/*" element={<RegisterRider />} />
            <Route path="register-learner/*" element={<RegisterDrivingLearner />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
