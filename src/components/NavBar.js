import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/img/logo.svg'
import NavIcon1 from '../assets/img/nav-icon1.svg'
import NavIcon2 from '../assets/img/nav-icon2.svg'
import NavIcon3 from '../assets/img/nav-icon3.svg'

export const NavBar = () => {

  const [linkActivo, setLinkActivo] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const updateLinkActivo = (value) => {
    setLinkActivo(value);
  }

  return (
    <Navbar bg="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio" 
              className={linkActivo === 'inicio' ? 'active navbar-link' : "navbar-link"}
              onClick={() => updateLinkActivo('inicio')}>
                Inicio
            </Nav.Link>
            <Nav.Link href="#proyectos"
              className={linkActivo === 'proyectos' ? 'active navbar-link' : "navbar-link"}
              onClick={() => updateLinkActivo('proyectos')}>
                Proyectos
            </Nav.Link>
            <Nav.Link href="#habilidades" 
              className={linkActivo === 'habilidades' ? 'active navbar-link' : "navbar-link"}
              onClick={() => updateLinkActivo('habilidades')}>
                Habilidades
            </Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href='#'><img src={NavIcon1} alt="Logo" /></a>
              <a href='#'><img src={NavIcon2} alt="Logo" /></a>
              <a href='#'><img src={NavIcon3} alt="Logo" /></a>
            </div>
            <button className='vvd' onClick={ () => console.log("clickeando") }><span>Conectando</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}