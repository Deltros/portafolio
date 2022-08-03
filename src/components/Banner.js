import { useState, useEffect } from 'react';
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {

  const toRotate = ["PHP Developer", "React Developer", "Database"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }
  return (
    <section className="banner" id="home">
        <Container>
          <Row className="align-items-cent">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Bienvenido a la paginita</span>
              <h1>{'Hola! '}
                <span className="wrap">{text}</span>
              </h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac augue semper lacus ullamcorper dapibus in vel dolor. Sed ac erat ipsum. Aliquam consequat tempus sapien. Nullam gravida faucibus nisi et dapibus. Mauris in elit metus. Nulla at fermentum augue. Cras rhoncus eget ligula non finibus. Curabitur iaculis vestibulum lobortis. Aenean pretium sed justo ut facilisis. Nam hendrerit dui eget elementum lacinia. Duis ut cursus est, ac pharetra ante. Suspendisse eu velit placerat, maximus dui id, posuere velit.</p>
              <button onClick={() => console.log("conectado")}
                >Contactame <ArrowRightCircle size={25}/> 
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt="Header Img"></img>
            </Col>
          </Row>
        </Container>
    </section>
  )
}