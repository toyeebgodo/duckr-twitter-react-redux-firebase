import React from 'react'
import { Router, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { MainContainer } from 'containers'


const routes = (
  <HashRouter>
    <Route path='/' component={MainContainer} />
  </HashRouter>
)

export default routes