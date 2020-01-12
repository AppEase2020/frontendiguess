import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function offerParking(props) {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
  }

  return (
    <div className="loginSuccess">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            //value={text}
            //onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>House Number</ControlLabel>
          <FormControl
            //value={text}
            //onChange={e => setPassword(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Street</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            //value={text}
            //onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>City</ControlLabel>
          <FormControl
            //value={text}
            //onChange={e => setPassword(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>State</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            //value={text}
            //onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Zip</ControlLabel>
          <FormControl
            //value={text}
            //onChange={e => setPassword(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="radioGroup">
          <ControlLabel>Number of Spots</ControlLabel>
          <FormControl
            autoFocus
            type="number"
            //value={text}
            //onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Start Date</ControlLabel>
          <FormControl
            //value={text}
            //onChange={e => setPassword(e.target.value)}
            type="text"
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>End Date</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            //value={text}
            //onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>House Number</ControlLabel>
          <FormControl
            //value={text}
            //onChange={e => setPassword(e.target.value)}
            type="text"
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Post My Listing!
        </Button>
      </form>
    </div>
  );
}