import logo from './logo.png';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ReadData from './Components/ReadData';
import Details from './Components/Details';
import Dashboard from './Components/Dashboard';
import ModifyDeleteData from './Components/ModifyDeleteData';
import Header from './Components/Header';

function App() {
  return (
    <div>
      
      <main>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/dataread' element={<ReadData/>} />
          <Route path='/datamodify' element={<ModifyDeleteData/>} />
          <Route path='/details' element={<Details/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          
        </Routes>
      </main>
    </div>
  
  );
}

export default App;
