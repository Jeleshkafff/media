import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Router, Routes,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import LogIn from './components/LogIn/Content';
import LogIOS from './components/LogIn/LogIOS';
import LogOut from './components/LogOut/LogOut';
import User from './components/User/User';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
    <Routes>
    <Route  path="/" element={<LogIOS/>}/>
    <Route  path="/Reg" element={<LogOut/>}/>
    <Route  path="/User" element={<User/>}/>  
    </Routes>
</BrowserRouter>
    {/* <LogIn/> */}
    </div>
  );
}

export default App;
