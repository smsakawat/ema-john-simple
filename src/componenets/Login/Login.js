import React from "react";
import { Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {signInUsingGoogle} = useAuth();
  const location = useLocation();
  const history = useHistory()
  // console.log('came-from',location.state?.from.pathname)
  const redirect_uri = location.state?.from || '/';

  const handleGoogleLogin=()=>{
    signInUsingGoogle()
    .then(result=>{
      history.push(redirect_uri);
    })
  }
  
  return (
    <div className="login-container p-5">
      <div className="form-container p-4">
        <Form>
          <h3 className="fw-bold text-start">Please Login</h3>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className="d-grid">
            <button className="form-btn">Login With Email</button>
          </div>
          <hr className=" text-center " />
        </Form>
        <div className="text-center">
          New to ema-john? <Link to="/register">Create an account</Link>
        </div>

        <p className="text-center">
          <small className="text-secondary">or use google sign-in</small>
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-danger" onClick={handleGoogleLogin}>
            <i className="fab fa-google-plus-square py-1 me-2"></i>
            google sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
