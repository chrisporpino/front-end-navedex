import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ShowPerson from "./components/ShowPerson";
import DeletePerson from "./components/DeletePerson";
import EditPerson from "./pages/EditPerson";
import AddPerson from "./pages/AddPerson";

function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/show" component={ShowPerson} />
      <Route path="/delete" component={DeletePerson} />
      <Route path="/edit" component={EditPerson} />
      <Route path="/add" component={AddPerson} />
    </BrowserRouter>
  );
}

export default Routes;
