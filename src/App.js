import logo from './logo.svg';
// import './App.css';
import Dashboard from './components/dashboard';
<<<<<<< HEAD
import AddRoom from './components/addroom';

function App() {
  return (
    <div className="App">
      <AddRoom/>
    </div>
=======
import Login from './components/login';
import Dashboard from './components/dashboard';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
>>>>>>> 86d1142056d281957803f68c31f95f8fcf352262
  );
}

export default App;
