import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";

export default function loginSuccess(props) {

    function handleParkingOfferSubmit(event){
        props.history.push('/parkingOffer');
    }

  return (
    <div className="Home">
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="lg">
          Offer Storage
        </Button>
      </ButtonToolbar>
      <form onClick={handleParkingOfferSubmit}>
        <ButtonToolbar>
            <Button bsStyle="info" bsSize="lg">
            Offer Parking
            </Button>
        </ButtonToolbar>
      </form>
      <ButtonToolbar>
        <Button bsStyle="primary" bsSize="lg">
          Need Storage
        </Button>
      </ButtonToolbar>
      <ButtonToolbar>
        <Button bsStyle="info" bsSize="lg">
          Need Parking
        </Button>
      </ButtonToolbar>
    </div>
  );
}
