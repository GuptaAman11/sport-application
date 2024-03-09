import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login1 from './component/Login/Login1';
import Signup from './component/Login/Signup';
import Profile from "./component/ProfilePage/Profile";
import CreateEvent from "./component/Event/CreateEvent";


function App() {
  return (
    <div className="App">
      
      
      
      <Router>
      
      
        <Routes>



          <Route path='/login' element={<Login1 /> } />
            <Route path='/signup' element={<Signup /> } />
            <Route path='/addprofile' element={<Profile /> } />
            <Route path='/addevent' element={<CreateEvent /> } />




        </Routes>
      
    </Router>

    </div>
  );
}

export default App;
