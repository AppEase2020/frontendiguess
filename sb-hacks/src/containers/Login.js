import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import {LinkContainer} from "react-router-bootstrap";
import {Redirect} from 'react-router-dom';

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(props);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

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
    const response = await fetch('http://localhost:3000/api/auth', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: json});
    //const jsonResponse = await response.json();
    console.log(response);
    if(response.status === 200){
      props.history.push('/menu');
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
