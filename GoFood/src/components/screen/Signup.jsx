import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [cradential, setCradentials] = useState({
    name: "",
    email: "",
    password: "",
    geolocation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: cradential.name,
        email: cradential.email,
        password: cradential.password,
        location: cradential.geolocation,
      }),
    });

    const json = await response.json();
    console.log(json);

    if (!json.success) {
      alert("Enter valid cradentials");
    } else {
      alert("Sign up successfully..");
    }
  };

  const onChange = (event) => {
    setCradentials({ ...cradential, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="m-3">
        <h1 className="text-success fw-bold">Sign Up</h1>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={cradential.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              value={cradential.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={cradential.password}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="geoLocations" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="geoLocations"
              name="geolocation"
              value={cradential.geolocation}
              onChange={onChange}
            />
          </div>

          <button type="submit" className="m-3 btn btn-success">
            Sign Up
          </button>
          <Link to="/login" className="m-3 btn btn-danger">
            Already a user
          </Link>
        </form>
      </div>
    </>
  );
}

export default Signup;
