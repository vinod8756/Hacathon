import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../Assests/logo.png";
import { Link } from "react-router-dom";
import QuizButton from "../Quiz";
import { useTranslation } from "react-i18next";

function NavBar() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
  
    return (
        <Navbar expand="lg" className="bg-light shadow-sm p-2 mb-0 bg-white rounded">
            <Container fluid className="p-0 mb-2">
                <Navbar.Brand href="/home" className="text-primary fw-bold">
                    <img style={{ width: "120px", borderRadius: "8px" }} src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="/home" className="text-dark mx-2">Home</Nav.Link>
                        <Nav.Link href="/AboutUs" className="text-dark mx-2">About</Nav.Link>
                        <Nav.Link href="/services" className="text-dark mx-2">features</Nav.Link>
                        <Nav.Link href="/ContactUs" className="text-dark mx-2">Contact</Nav.Link>
                        <QuizButton />
                    </Nav>
                    <Form className="d-flex align-items-center gap-2">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="info">Search</Button>
                        <Link to="/" style={{textDecoration : 'none'}} className="d-flex align-items-center ms-2">
                            <Button variant="danger" style={{ whiteSpace: "nowrap" ,textDecoration : 'none'}}>
                                Log Out
                            </Button>
                        </Link>
                        <div className="d-flex align-items-center gap-2 ms-3">
                            <Button onClick={() => changeLanguage('english')}>English</Button>
                            <Button onClick={() => changeLanguage('kannada')}>ಕನ್ನಡ</Button>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
