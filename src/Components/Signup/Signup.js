import React, { useState } from 'react';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate , Link } from "react-router-dom";
import { Button, Form, Container, Nav, Navbar } from "react-bootstrap";
import classes from './Signup.module.css';
import logo from '../../Assests/logo2.png';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.loginFormContainer}>
      <Navbar expand="lg" bg="none" variant="dark" className={classes.customNavbar}>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" style={{ width: '120px', borderRadius: '8px' }} />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/" className={classes.styledbutton}>Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className={classes.formContainer}>
        <Form onSubmit={handleSignUp} className={classes.signupContainer}>
          <h2 className={classes.signupHeader}>Sign Up</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Confirm Password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </Form.Group>
          {error && <p className={classes.errorText}>{error}</p>}
          <Button variant="primary" type="submit" className={classes.submitButton}>Sign Up</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
