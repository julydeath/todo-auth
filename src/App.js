import "./App.css";
import Todo from "./components/todo/Todo";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Createaccount from "./components/createaccount/CreateAccount";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./components/auth/UserAuth";
import Protected from "./Protected";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Createaccount />} />
          <Route path="todo" element={<Todo />} />
          <Route
            path="/profile"
            element={
              <Protected>
                <Todo />
              </Protected>
            }
          />
        </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
