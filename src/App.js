
import './App.css';
import Nav from './components/Nav';
import Login from './Login'
import Firstpage from './Firstpage';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home'
import Trend from './Pages/Trend'




function App() {
  return (
    <BrowserRouter> 
    <div>

    <Nav/>
    <Routes> 
    <Route path="/" element={<Firstpage/>} />
    <Route path="home" element={<Home/>} />
    <Route path="trend" element={<Trend/>} />
    <Route path="join" element={<Login/>} />

    </Routes>
   
   
    {/* <FirstPart/>
    <How3/> 
    <Treading/>
    <Rank/>
     */}

    </div>
    </BrowserRouter>
  );
}

export default App;
