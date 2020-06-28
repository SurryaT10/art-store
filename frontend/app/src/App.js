import React from 'react';
import './App.css';
import {Switch} from 'react-router-dom'

import Route from './routes/Route'
import Layout from './containers/Layout/Layout'


const app = () => (
  <Layout>
    <Switch>
      <Route />
    </Switch>
  </Layout>
)
export default app;
