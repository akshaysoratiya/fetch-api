import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Components/Login';
import Regestration from './Components/Registration';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registration' element={<Regestration />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
