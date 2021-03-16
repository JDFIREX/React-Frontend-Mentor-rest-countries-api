import React from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import "./index.css"

const Root = () => {

    return (
        <Router>
            <React.StrictMode>
                <Nav />
                <Switch>
                    <Route exact path="/" componets={} />
                    <Route path="/country/:id" children={} />
                    <Route path="*" componets={} />
                </Switch>
            </React.StrictMode> 
        </Router>
    )

}



ReactDOM.render(<Root />, document.querySelector('#root'))