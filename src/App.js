import 'devextreme/dist/css/dx.common.css';
import React, { Component } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import appInfo from './app-info';
import { navigation } from './app-navigation';
import routes from './app-routes';
import './App.scss';
import './dx-styles.scss';
import { Footer, LoginForm } from './components';
import {
  SideNavOuterToolbar,
  // SideNavInnerToolbar,
  SingleCard
} from './layouts';
import './themes/generated/theme.additional.css';
import './themes/generated/theme.base.css';
import { sizes, subscibe, unsibscribe } from './utils/media-query';

const LoginContainer = ({ logIn }) => <LoginForm onLoginClick={logIn} />;

const NotAuthPage = (props) => (
  <SingleCard>
    <Route render={() => <LoginContainer {...props} />} />
  </SingleCard>
);

const AuthPage = (props) => (
  <SideNavOuterToolbar menuItems={navigation} title={appInfo.title} {...props}>
    <Switch>
      {routes.map(item => (
        <Route
          exact
          key={item.path}
          path={item.path}
          component={item.component}
        />
      ))}
      <Redirect to={'/home'} />
    </Switch>
    <Footer>
      Copyright © 2011-2019 Developer Express Inc.
      <br />
      All trademarks or registered trademarks are property of their
      respective owners.
    </Footer>
  </SideNavOuterToolbar>
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: true,
      screenSizeClass: this.getScreenSizeClass()
    };
  }

  componentDidMount() {
    subscibe(this.screenSizeChanged);
  }

  componentWillUnmount() {
    unsibscribe(this.screenSizeChanged);
  }

  render() {
    const { loggedIn } = this.state;

    const userMenuItems = [
      {
        text: 'Profile',
        icon: 'user'
      },
      {
        text: 'Logout',
        icon: 'runner',
        onClick: this.logOut
      }
    ];

    const classes = `app ${this.state.screenSizeClass}`;
    return (
      <div className={classes}>
        <Router>{loggedIn ? <AuthPage userMenuItems={userMenuItems} /> : <NotAuthPage logIn={this.logIn} />}</Router>
      </div>
    );
  }

  getScreenSizeClass() {
    const screenSizes = sizes();
    return Object.keys(screenSizes).filter(cl => screenSizes[cl]).join(' ');
  }

  screenSizeChanged = () => {
    this.setState({
      screenSizeClass: this.getScreenSizeClass()
    });
  }

  logIn = () => {
    this.setState({ loggedIn: true });
  };

  logOut = () => {
    this.setState({ loggedIn: false });
  };
}

export default App;
