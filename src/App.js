import logo from './logo.svg';
// import './App.css';
import Dashboard from './components/dashboard';
import Login from './components/login';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
