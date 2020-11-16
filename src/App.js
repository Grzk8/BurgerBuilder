import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/containers/BurgerBuilder/BurgerBuilder';
import Checkout from './components/containers/Checkout/Checkout';
import Orders from './components/containers/container/Orders/Orders';

function App() {
  return(
    <>
      <Layout>
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/orders' component={Orders} />
          <Route path='/BurgerBuilder' exact component={BurgerBuilder} />
        </Switch>
      </Layout>
    </>
  )

}
export default App;
