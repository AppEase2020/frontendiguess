import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

async function submitdata(event){
  event.preventDefault();
  console.log(event.target);
  const form = event.target;
  const data = new FormData(form);
  const object = {}
  data.forEach(function(value, key){
    object[key] = value;
  });
  const json = JSON.stringify(object);
  const response = await fetch('http://localhost:3000/api/users', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: json});
  const jsonResponse = await response.json();
  console.log(jsonResponse);
}
const Signup = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit ={submitdata}>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input name = 'name'
              type="text"
              id="defaultFormRegisterNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input 
              name = 'email'
              type="email"
              id="defaultFormRegisterEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormRegisterPasswordEx"
              className="grey-text"
            >
              Your password
            </label>
            <input
              name = 'password'
              type="password"
              id="defaultFormRegisterPasswordEx"
              className="form-control"
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Signup;
