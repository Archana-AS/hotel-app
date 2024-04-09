import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hotel from './components/Hotel';
import Searchhotel from './components/Searchhotel';
import Signup from './components/Signup';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Hotel />} />
          <Route path='/search' element={<Searchhotel/>} />
          <Route path='/signup' element={<Signup />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
