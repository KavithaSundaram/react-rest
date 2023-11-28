
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center mt-3">
        <Col lg={10}>
          <Carousel className="carouselitem mt-5">
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-400"
                src={require("../assets/mini-idle.jpg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="display-5 mt-1">Where there is Food there is Love</h3>
                <h3>Idly</h3>
                <p className="d-none d-sm-block">
                Idli or idly is a type of savoury rice cake,popular as a breakfast food in Southern India.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-400"
                src={require("../assets/idli-vada.png")}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3 className="display-5 mt-1">Where there is Food there is Love</h3>
                <h3>Venpongal</h3>
                <p className="d-none d-sm-block">
                  Ven pongal recipe made with moong lentils, rice, spices and curry leaves. 
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100 h-400"
                src={require("../assets/dish-dosa.jpg")}
                alt="Third slide"
              />
              <Carousel.Caption>
              <h3 className="display-5 mt-1">Where there is Food there is Love</h3>
                <h3>Dosa</h3>
                <p className="d-none d-sm-block">
                A dosa is a thin savory crepe in South Indian cuisine made from a fermented batter of ground black lentils and rice. 
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      
    </Container>
  );
};

export default Banner;
