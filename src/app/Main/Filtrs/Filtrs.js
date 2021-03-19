import React , { useContext } from "react"
import restContext from "./../../../index"
import searchIcon from "./../../../images/search.svg"
import arrow from "./../../../images/chevron.svg"
import check from "./../../../images/check.svg"
import "./Filtrs.css"

const Options = () => {
    const {state,dispatch} = useContext(restContext);

    return (
        <div className="Options_filters">
            <button name="Africa" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                Africa
                {state.options["Africa"].filter && (
                    <img src={check} alt="check" />
                )}
            </button>
            <button name="Americas" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                America
                {state.options["Americas"].filter && (
                    <img src={check} alt="check" />
                )}
            </button>
            <button name="Asia" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                Asia
                {state.options["Asia"].filter && (
                    <img src={check} alt="check" />
                )}
            </button>
            <button name="Europe" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                Europe
                {state.options["Europe"].filter && (
                    <img src={check} alt="check" />
                )}
            </button>
            <button name="Oceania" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                Oceania
                {state.options["Oceania"].filter && (
                    <img src={check} alt="check" />
                )}
            </button>
        </div>    
    )
}



const Filtrs = () => {

    const {state,dispatch} = useContext(restContext);


    return(
        <div className="Filtrs">
            <div className="Search">
                <img src={searchIcon} alt="search"/>
                <input  value={state.search} onChange={(e) => dispatch({type : "SEARCH", value : e.target.value })} placeholder="Search for a country..."/>
            </div>
            <div className="Options">
                <button className="Options_container" onClick={() => dispatch({type : "FILTERS"})}>
                    <p>Filter by Region</p>
                    <img src={arrow} alt="options" />
                </button>
                {
                    state.optionsOpen && (
                        <Options dispatch={dispatch} />
                    )
                }
            </div>
        </div>
    )
}


export default Filtrs