import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ " Desarrollador Web", " Desarrollador de Apps Móviles y Web", " UI/UX Designer" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect (() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="Inicio">
            <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">¡Bienvenid@, al Portafolio de Juan Andrés Rojas Salinas!</span>
                    <h1>{'Hola Soy,'}<span className="wrap">{text}</span></h1>
                    <p>Desarrollo de aplicaciones web y móviles, con tecnologías como React, React Native, Node.js, Express, MongoDB, Firebase, entre otras.</p>
                    <button onClick={() => console.log('connect')}>Contactame<ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img" />
                </Col>
            </Row>
        </Container>
        </section>
    );
}