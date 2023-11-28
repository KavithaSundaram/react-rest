import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from 'react-bootstrap/Modal';

const PizzaCard = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Now
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Receipe</h4>
          <p>
            Ready to add basket<br/>
            Added to the basket!!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

  return (
    <>
      <Card className="mt-2">
        <Card.Img variant="top" src={require("../assets/ghee-roast.jpg")} />
        <Card.Body>
          <Card.Title>Idle Dosa</Card.Title>
          <Card.Text>
              Idli or idly is a type of savoury rice cake, originating from South India, popular as a breakfast food in Southern India and in Sri Lanka.
          </Card.Text>
          <div className="text-center">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Add to Basket
            </Button>
          </div>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default PizzaCard;