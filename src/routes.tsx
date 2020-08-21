import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import ViewPerson from './components/ViewPerson';
import DeletePerson from './components/DeletePerson';
import DeletedSuccessfully from './components/DeletedSuccessfully';
import EditPerson from './pages/EditPerson';
import AddPerson from './pages/AddPerson';
import EditedSuccessfully from './components/EditedSuccessfully';
import AddedSuccessfully from './components/AddedSuccessfully';

function Routes() {
  return(
    <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/view" component={ViewPerson} />
      <Route path="/delete" component={DeletePerson} />
      <Route path="/deleted" component={DeletedSuccessfully} />
      <Route path="/edit" component={EditPerson} />
      <Route path="/edited" component={EditedSuccessfully} />
      <Route path="/add" component={AddPerson} />
      <Route path="/added" component={AddedSuccessfully} />
    </BrowserRouter>
  )
}

export default Routes;