import Login from './components/login';
import Dashboard from './components/dashboard';
import RoomList from './components/roomlist';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
 
  return (
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route  path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/roomlist" element={<RoomList/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );


}

export default App;
