import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './Components/Auth';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/' element={<Auth/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
