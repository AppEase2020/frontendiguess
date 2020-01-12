import React from "react";
import { Button, ButtonToolbar } from "react-bootstrap";

export default function loginSuccess(props) {

    function handleNeedStorage(event){
        props.history.push('storageOfferings')
    }
    function handleOfferStorage(event){
        props.history.push('/storageOffer');
    }
    function handleNeedParking(event){
        props.history.push('/parkingOfferings');
    }
    function handleParkingOfferSubmit(event){
        props.history.push('/parkingOffer');
    }

  return (
    <div className="Home">
    <form onClick={handleOfferStorage} >
        <ButtonToolbar>
            <Button bsStyle="primary" bsSize="lg">
            Offer Storage
            </Button>
        </ButtonToolbar>
      </form>
      <form onClick={handleParkingOfferSubmit}>
        <ButtonToolbar>
            <Button bsStyle="info" bsSize="lg">
            Offer Parking
            </Button>
        </ButtonToolbar>
      </form>
      <form onClick= {handleNeedStorage} >
        <ButtonToolbar>
            <Button bsStyle="primary" bsSize="lg">
            Need Storage
            </Button>
        </ButtonToolbar>
    </form>
      <form onClick = {handleNeedParking}>
        <ButtonToolbar>
            <Button bsStyle="info" bsSize="lg">
            Need Parking
            </Button>
        </ButtonToolbar>
      </form>
    </div>
  );
}
