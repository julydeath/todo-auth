import React,{useState} from "react";
import "./login.css";
import { useUserAuth } from "../auth/UserAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  //const [logged, setLogged] = useState(false)
  const {logIn} = useUserAuth()
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      await logIn(email,password)
      navigate('/todo')
      //setLogged(true)
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div>
      <div className="login-container">
        <div className="row">
          <div className="col-md-12">
            <form className="slideDown" onSubmit={handleSubmit}>
              <h2>login</h2>
              {error ? <p>{error}</p> : null}
              <div className="login-Wrapper">
                <div className="login-group">
                  <input type="email" className="login-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label htmlFor="inputEmail">Email</label>
                </div>
                <div className="login-group">
                  <input
                    type="password"
                    className="login-control"
                    id="inputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <button className="login-btn btn-primary">
                  Login
                </button>
                <p>Dont have account create one ? <span onClick={() => navigate('/signup')} className="login-span-signup">signup</span></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
