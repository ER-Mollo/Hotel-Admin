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

  );
}

export default App;
