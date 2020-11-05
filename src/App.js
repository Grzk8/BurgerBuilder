import React from 'react';
import {Reute, Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';
import Ceckout from './components/containers/Checkout/Checkout';
import Checkout from './components/containers/Checkout/Checkout';

function App() {
  return(
    <>
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </>
  )

}
export default App;