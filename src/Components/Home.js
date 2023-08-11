import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
// import waveSVG from '../wave.svg'
import './Home.css'
import headerImg from "../assets/img/header-img.svg";
export default function Home() {
  return (
    
    <section className='banner' id='home'>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagLine">Welcome to my portfolio</span>
            <h1>{`Hi, I'm Sarang`}<span className='wrap'>Web developer</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut esse quis excepturi quam, iure assumenda perferendis dolor ut eum consequatur corporis reiciendis dolorum obcaecati iste nulla voluptate ipsa voluptatibus quibusdam enim provident necessitatibus. Aspernatur.</p>
            <button onClick={()=> console.log('connect')}>Let's Connect <i className="bi bi-arrow-left"></i></button>
            {/* <button><i className="bi bi-arrow-left"></i></button> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header img" />
          </Col>
        </Row>
      </Container>
      
    </section>
    
  )
}
