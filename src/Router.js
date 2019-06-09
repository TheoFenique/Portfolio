import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App.js'
import NotFound from './components/NotFound/NotFound.js'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default Router