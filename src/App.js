
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Contact from './Componenets/Contact ';
import Home from './Componenets/Home';
import Fashion from './Componenets/Fashion';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route  path='/' element={<Home/>}/>
  <Route path='/about'element={<Contact/>}/>
  <Route path='/fashion'element={<Fashion/>}/>
 </Routes>
 
 </BrowserRouter>
  );
}

export default App;
