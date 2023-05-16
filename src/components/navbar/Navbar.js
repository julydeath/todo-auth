import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useUserAuth } from "../auth/UserAuth";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useUserAuth();
  const navigate = useNavigate()

  const handleClick = async() => {
    await logout()
    navigate('/login')
  }

  return (
    <div className="container">
      <div className="image">
        <img
          className="profile-img"
          src="https://galleria-minsk.by/assets/images/clothes-and-shoes/todo/logo-todo.jpg"
          alt="name"
        />
      </div>
      <div className="links-container">
        <Link className="link" to="/">
          Home
        </Link>
        {user?.email ? (
          <Link className="link" onClick={handleClick}>
            logout
          </Link>
        ) : (
          <Link className="link" to="/login">
            login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
