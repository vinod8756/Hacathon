import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import classes from "./Login.module.css";
import logo from '../../Assests/logo2.png';
import { Link, useNavigate } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useState } from "react";
import { auth } from '../../firebase'; // Adjust the path as necessary
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className={classes.loginFormContainer}>
        <Navbar
          expand="lg"
          bg="none"
          variant="dark"
          className={classes.customNavbar}
        >
          <Container>
            <Navbar.Brand href="#home"><img alt="" style={{width:'120px' ,borderRadius: '8px'}} src={logo}/></Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
              <Nav.Link href="/AboutUs">About us</Nav.Link>
              <Link to = '/signup'><Nav.Item className={classes.styledbutton}>Sign up</Nav.Item></Link>
            </Nav>
          </Container>
        </Navbar>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            justifyItems: "centre",
            alignItems:'center'
          }}
        >
          <div className={classes.loginForm}>
            <Form
              onSubmit={handleLogin}
              style={{
                width: "100%",
                borderRight: "1px solid grey",
                height: "100%",
                padding: "20px",
                borderRadius: "8px",
              }}
            >
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

              {error && <p className={classes.errorText}>{error}</p>}

              <Button
                variant="primary"
                type="submit"
                className={classes.submitButton}
              >
                Submit
              </Button>

              <p className={classes.signupText}>
                New user? <Link to="/signup">Sign up</Link> instead.
              </p>
            </Form>
          </div>

          <div className={classes.container}>
            <h1 className={classes.welcome}>Welcome</h1>
            <p className={classes.text}>
              to Nova Next – where education embraces the future!
              Through Artificial Intelligence, we offer courses that elevate
              your skills, providing personalized, interactive learning
              experiences tailored to your goals. Whether you're exploring new
              fields, advancing your career, or staying ahead in the digital
              world, join us to make education more accessible, engaging, and
              impactful. Dive into our courses and start your journey with us
              today!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;