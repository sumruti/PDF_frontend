import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../Layout/index';











import DefaultDashboard from '../Dashboards/Default/index';

import Createpdf from '../../components/Createpdf/Createpdf';







const wrappedRoutes = () => (
  <div>
        <Layout />
          <div className="container__wrap">
     
            <Route path="/Createpdf" component={Createpdf} />  
            <Route path="/" component={DefaultDashboard} />  
            <Route path="/dashboard_default" component={DefaultDashboard} />  

     

    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
       
        <Route path="/" component={wrappedRoutes} />
       
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
