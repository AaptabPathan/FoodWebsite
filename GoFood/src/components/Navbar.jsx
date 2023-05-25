import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/esm/Badge";

import Modal from "../Modal";
import Cart from "./screen/Cart";
import { useCart } from "./ContextReducer";
function Navbar() {
  const data = useCart();
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };


  const loadCart = () => {
    setCartView(true)
  }

  const setCartFalse = () =>{
    setCartView(false)
  }

  return (

 

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <Link className="navbar-brand fs-2 fw-bold fst-italic" to="/">
            GoFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className="nav-link mt-1 fs-5 active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link mt-1 fs-5 active"
                    aria-current="page"
                    to="/myOrder"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>

            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  className="btn bg-light text-success mt-1 fs-6 mx-1"
                  to="/login"
                >
                  Login
                </Link>

                <Link
                  className="btn bg-light text-success mt-1 fs-6 mx-1"
                  to="/createuser"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div>
                <div className="btn bg-white text-success mx-2 fs-6" onClick={loadCart}>
                  My Cart
                  <Badge pill bg="danger" className="mx-1">
                    {(data.length === 0)?"":(data.length)}
                  </Badge>
                  {cartView ? <Modal onClose={() => setCartView(setCartFalse)}><Cart></Cart></Modal> : ""}
                </div>

                <div
                  className="btn bg-white text-danger mx-2 fs-6"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

