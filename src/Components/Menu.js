
import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "./PizzaCard";

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <section className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-primary my-5 py-5 pb-1">
            Treat yourself with our Everyday Menu
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={4} key={item}>
                <PizzaCard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
