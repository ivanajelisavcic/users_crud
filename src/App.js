import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Header } from "../src/shared/Header";
import { Footer } from "../src/shared/Footer";
import { Users } from "../src/pages/users/Users";



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
          <Route path="/" component={Users} />
          {/* <Redirect from="/" to="/users"/> */}
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;

