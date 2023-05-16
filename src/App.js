import './App.css'
import Todo from "./components/Todo"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='todo' element={<Todo/>}/>
      </Routes>
    </div>
  );
}

export default App;
