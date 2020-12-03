import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './components/containers/Checkout/Checkout';
import Orders from './components/containers/container/Orders/Orders';
import Auth from './components/Auth/Auth';
import Logout from './components/Auth/Logout/Logout';
import * as actions from './store/actions/index';

class App extends Component {
  componentDidMount (){
    this.props.onTryAutoSignup();
  }
  render() {

    let routes = (
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/BurgerBuilder' exact component={BurgerBuilder} />
        <Redirect to='/BurgerBuilder' />
    </Switch>
    );
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/logout' component={Logout} />
          <Route path='/auth' component={Auth} />
          <Route path='/BurgerBuilder' exact component={BurgerBuilder} />]
          <Redirect to='/BurgerBuilder' />
      </Switch>
      );
    }
    return(
      <>
        <Layout>
          {routes}
        </Layout>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
