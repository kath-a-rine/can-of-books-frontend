import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './About'
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from "@auth0/auth0-react";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
// import Profile from './components/Profile';
import Content from './Content';
import WelcomePage from './WelcomePage';


class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              {
                this.props.auth0.isAuthenticated
                ?
                <BestBooks />
                :
                <WelcomePage />
              }
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
          <Footer />
        </Router>
        {
          this.props.auth0.isAuthenticated
          ? 
          <LogoutButton />
          :
          <LoginButton />
        }
        {
          this.props.auth0.isAuthenticated
          ?
          <Content />
          :
          <p>Please login</p>
        }
      </>
    )
  }
}

export default withAuth0(App);
