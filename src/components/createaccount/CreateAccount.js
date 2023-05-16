import React,{useState} from "react";
import "./signup.css";

const CreateAccount = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className="signup-container">
        <div className="row">
          <div className="col-md-12">
            <form className="slideDown" onSubmit={handleSubmit}>
              <h2>signup</h2>
              <div className="signup-Wrapper">
                <div className="signup-group">
                  <input type="email" className="signup-control" id="inputEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <label htmlFor="inputEmail">Email</label>
                </div>
                <div className="signup-group">
                  <input
                    type="password"
                    className="signup-control"
                    id="inputPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <button type="submit" className="signup-btn btn-primary">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
