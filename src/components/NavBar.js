import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/foto.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('Inicio');
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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Inicio" className={activeLink === 'Inicio' ? 'activate navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Inicio')}>Inicio</Nav.Link>
                        <Nav.Link href="#Acerca de mi" className={activeLink === 'Acerca de mi' ? 'activate navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Acerca de mi')}>Acerca de mi</Nav.Link>
                        <Nav.Link href="#Habilidades" className={activeLink === 'Habilidades' ? 'activate navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Habilidades')}>Habilidades</Nav.Link>
                        <Nav.Link href="#Proyectos" className={activeLink === 'Proyectos' ? 'activate navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Proyectos')}>Proyectos</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"><img src={navIcon1} alt="Facebook" /></a>
                            <a href="#"><img src={navIcon2} alt="" /></a>
                            <a href="#"><img src={navIcon3} alt="" /></a>
                            <a href="#"><img src={navIcon4} alt="" /></a>
                        </div>
                        <button className='vvd' onClick={() => console.log('connect')}><span>Contactame</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
