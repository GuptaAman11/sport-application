import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login1 from "./component/Login/Login1";
import Signup from "./component/Login/Signup";
import Profile from "./component/ProfilePage/Profile";
import CreateEvent from "./component/Event/CreateEvent";
import GetProfile from "./component/ProfilePage/GetProfile";
import User from "./component/User/User";
import FetchEvent from "./component/Event/FetchEvent";
import Navbar from "./component/Navbar/Navbar";
import Notfound from "./component/Navbar/Notfound";
import About from "./component/Navbar/About";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login1 />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/addevent" element={<CreateEvent />} />
            {/* user or profile related stufff */}
            <Route path="/addprofile" element={<Profile />} />

            <Route path="/getuser/getuser/:userId" element={<GetProfile />} />
            {/* updateProfile and getuser by profile remaining */}
            <Route path="/getuser" element={<User />} />

            <Route path="/addevent" element={<CreateEvent />} />
            <Route path="/about" element={<About />} />
            <Route path="/getallevent" element={<FetchEvent />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
