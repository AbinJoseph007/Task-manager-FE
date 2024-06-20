import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './Componets/Login';
import TaskDash from './pages/TaskDash';

function App() {
  return (
    <div className="App">  
     <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Login register/>}/>
      <Route path='/Taskchart' element={<TaskDash/>}/>
     </Routes> 
    </div>
  );
}

export default App;
