import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  return (
    <div className="register-container p-5">
      <div className="form-container p-4">
        <Form>
          <h3 className="fw-bold text-start">Register</h3>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="password" placeholder="Re-enter Password" />
          </Form.Group>
          <div className="d-grid">
            <button className="form-btn">Register With Email</button>
          </div>
          <hr className=" text-center " />
        </Form>
        <div className="text-center">
          Already have an account? <Link to="/login">Login</Link>
        </div>

        <p className="text-center">
          <small className="text-secondary">or use google sign-in</small>
        </p>
        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-danger">
            <i className="fab fa-google-plus-square py-1 me-2"></i>
            google sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
