import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Me gusta el platano", "bigote", "sa-be"];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    },delta)

    return () => { clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updateText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta /2)
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
    <section className="banner" id="home">
      <Container>
        <Row className="align-item-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my portafolio</span>
            <h1>{`Hi im jose `}<span className="wrap">{text}</span></h1>
            <p>Sunt expedita veritatis necessitatibus consequuntur dicta. Recusandae 
              consequatur maiores. Ea nisi nisi nam. Dolorem sint similique dolor blanditiis. 
              Fugiat ratione deleniti hic. Nam esse ipsa id maxime quo sed dicta.</p>
            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
