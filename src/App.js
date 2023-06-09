import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Router, Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import LogIn from "./components/LogIn/Content";
import LogIOS from "./components/LogIn/LogIOS";
import LogOut from "./components/LogOut/LogOut";
import User from "./components/User/User";
import Main from "./components/Main";
import Subscribers from "./components/Subscribers";
import Subscriptions from "./components/Subscriptions";
import Message from "./components/Message";
// import Uusr
import Uuser from "./components/UUser";
// subscribers;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LogIOS />} />
          <Route path="/Reg" element={<LogOut />} />
          <Route path="/User" element={<User />} />
          <Route path="/Main" element={<Main />} />
          <Route path="/subscribers" element={<Subscriptions />} />
          <Route path="/subscriptions" element={<Subscribers />} />
          <Route path="/jeleshkafff" element={<Uuser />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
      {/* <LogIn/> */}
    </div>
  );
}

export default App;
