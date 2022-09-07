import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Regestration from './Components/Registration';
import Adduser from './Components/Adduser';
import Dashboard from './Components/Dashboard';
import Edituser from './Components/Edituser';
import PrivateRoutes from './Util/PrivateRoutes';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route path='/adduser' element={<Adduser />} />
            <Route path='/edituser' element={<Edituser />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Regestration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
