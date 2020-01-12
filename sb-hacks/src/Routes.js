import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import loginSuccess from "./containers/menu";
import offerParking from "./containers/offerParking";
import parkingOfferings from "./containers/parkingOfferings";
import parkingListings from "./containers/parkingListings";
import storageOffer from "./containers/storageOffer";
import storageOfferings from "./containers/storageOfferings";
import storageListings from "./containers/storageListings";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/menu" exact component={loginSuccess}/>
      <Route path="/parkingOffer" exact component={offerParking}/>
      <Route path="/parkingOfferings" exact component={parkingOfferings}/>
      <Route path="/parkingListings" exact component={parkingListings}/>
      <Route path="/storageOffer" exact component={storageOffer}/>
      <Route path="/storageOfferings" exact component={storageOfferings}/>
      <Route path="/storageListings" exact component={storageListings}/>
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
