import React, {useContext} from "react"
import restContext from "./../../index"
import LightMoon from "./../../images/LightMoon.svg"
import DarkMoon from "./../../images/DarkMoon.svg"
import "./Nav.css"

const Nav = () => {


    const {state,dispatch} = useContext(restContext);
    console.log(state.Darkmode)

    return(
        <div className="Nav">
            <h1>Where in the world?</h1>
            <button
                onClick={() => dispatch({type: "MODE", })}
            >
                <img src={state.Darkmode ? LightMoon : DarkMoon}   className="darkmode" alt="darkmode"/>
                <p>Dark Mode</p>
            </button>
        </div>
    )
}


export default Nav