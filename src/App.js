
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fiction from './pages/Fiction';
import Nonfiction from './pages/Non-fiction';
import Education from './pages/Education';
import Health from './pages/Health';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/fiction' element={<Fiction/>}/>
         <Route path='/nonfiction' element={<Nonfiction/>}/>
         <Route path='/education' element={<Education/>}/>
         <Route path='/health' element={<Health/>}/>
      </Routes>
    </div>
  );
}

export default App;
