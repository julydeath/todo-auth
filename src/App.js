import "./App.css";
import Todo from "./components/todo/Todo";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Createaccount from "./components/createaccount/CreateAccount";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./components/auth/UserAuth";
import Protected from "./components/Procted";
import { useState } from "react";

function App() {
  const [userLogged, setUserLogged] = useState(false)
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Createaccount />} />
          <Route path="todo" element={<Todo />} />
          <Route path="/profile"  element={<Protected isLoggedIn={userLogged}><Todo /></Protected>}
/>
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
