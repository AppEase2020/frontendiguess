import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {render, ReactDOM} from 'react-dom';

export default function parkingOfferings(props) {
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
    const response = await fetch('http://localhost:3000/api/parkingListings/getlistings', {method: 'POST', headers: {'Content-Type': 'application/json', 'x-auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTFhYzYzZjU1MjkwNDVkYTQzNWZjZjIiLCJpYXQiOjE1Nzg4MjYwNjcsImV4cCI6MTU3ODkxMjQ2N30.0QVsp2P9-Z9Y43jzIM3liDJAFiL6sQg7KFu84X3j3f8'}, body: json})

    if(response.status === 200){
        props.history.push('/parkingListings');
    }
  }

  return (
    <div className="parkingOfferings">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Address:</ControlLabel>
          <FormControl
            autoFocus
            type="text"
            name="address"
            //value={text}
            //onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <form onSubmit={handleSubmit}></form>
            <Button block bsSize="large" type="submit">
            Find Listings
            </Button>
      </form>
    </div>
  );
}