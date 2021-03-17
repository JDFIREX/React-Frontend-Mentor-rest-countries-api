import React, { useReducer,useEffect} from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import "./index.css"
import Nav from "./app/Nav/Nav"
import Main from "./app/Main/Main"
import Design from "./design/desktop-design-home-dark.jpg"


const initalState = {
    Darkmode : false,
    search : "",
    optionsOpen: false
}

const reducer = (state, action) => {
    switch(action.type){
        case "MODE" : 
            return {
                ...state,
                Darkmode: !state.Darkmode
            }
        case "SEARCH" :
            return {
                ...state,
                search : action.value
            }
        default : throw new Error();
    }
}
const restContext = React.createContext();
export default  restContext

const Root = () => {
    

    const [state,dispatch] = useReducer(reducer,initalState)

    useEffect(() => {
        state.Darkmode ? 
            document.querySelector(".body").classList.add("root-DarkMode") : 
            document.querySelector(".body").classList.remove("root-DarkMode"); 
    },[state.Darkmode])

    return (
        <restContext.Provider  value={{state, dispatch}}>
            <Router>
                <React.StrictMode>
                    <img src={Design} className="Design" alt="" />
                    <Nav />
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/country/:id" />
                        <Route path="*" component={Main} />
                    </Switch>
                </React.StrictMode> 
            </Router>
        </restContext.Provider>
    )

}



ReactDOM.render(<Root />, document.querySelector('#root'))