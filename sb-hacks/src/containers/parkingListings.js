import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export default function parkingListings(props) {
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");  
    return (
      <div className="ParkingListings">
        <Button block bsSize="large" type="text">
            12720 Westly Lane, San Diego, CA 92131 | jaypatwardhan@ucsb.edu | 20
        </Button>
        <Button block bsSize="large" type="text">
            Listing B
        </Button>
        <Button block bsSize="large" type="text">
            Listing C
        </Button>
        <Button block bsSize="large" type="text">
            Listing D
        </Button>
        <Button block bsSize="large" type="text">
            Listing E
        </Button>
      </div>
    );
  }