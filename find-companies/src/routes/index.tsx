import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Mapa from '../pages/Mapa'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/mapa" component={Mapa} />
  </Switch>
)

export default Routes