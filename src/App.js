import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Header } from "./shared/Header";
import { Footer } from "./shared/Footer";
import { Users } from "./pages/users/Users";
import { UsersCreate } from "./pages/usersCreate/UsersCreate"
import { UsersIdEdit } from "./pages/usersEdit/UsersIdEdit"
import { UsersId } from "./pages/usersId/UsersId"



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <>
        <Header />
        <Switch>

          <Route path='/users/usersedit' component={UsersIdEdit} />
          <Route path='/users/:id' component={UsersId} />
          <Route path='/users' component={Users} />
          <Redirect to="/users" />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;



