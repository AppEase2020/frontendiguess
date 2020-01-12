import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function storageOffer(props) {
  //const [email, setEmail] = useState("");
  //const [password, setPassword] = useState("");

 async function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
    const form = event.target;
    const data = new FormData(form);
    const object = {}
    data.forEach(function(value, key){
      object[key] = value;
    });
    const json = JSON.stringify(object);
    const response = await fetch('http://localhost:3000/api/storageListings', {method: 'POST', headers: {'Content-Type': 'application/json', 'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTFhYzYzZjU1MjkwNDVkYTQzNWZjZjIiLCJpYXQiOjE1Nzg4MjYwNjcsImV4cCI6MTU3ODkxMjQ2N30.0QVsp2P9-Z9Y43jzIM3liDJAFiL6sQg7KFu84X3j3f8'}, body: json});
    //const jsonResponse = await response.json();
    console.log(response);
    if(response.status === 200){
      props.history.push('/menu');
    }
  }

  return (
    <div className="loginSuccess">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Name</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            name="name"
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
            name="houseNumber"
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Street</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            name="street"
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
            name="city"
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>State</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            name="state"
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
            name="zip"
          />
        </FormGroup>
        <FormGroup controlId="radioGroup">
          <ControlLabel>Amount Of Space (cubic meters)</ControlLabel>
          <FormControl
            autoFocus
            type="number"
            name="amountOfSpace"
            //value={text}
            //onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="radioGroup">
          <ControlLabel>Price Per Day</ControlLabel>
          <FormControl
            autoFocus
            type="number"
            name="pricePerDay"
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
            name="startDate"
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>End Date</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            name="endDate"
            //value={text}
            //onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <Button block bsSize="large" type="submit">
          Post My Listing!
        </Button>
      </form>
    </div>
  );
}