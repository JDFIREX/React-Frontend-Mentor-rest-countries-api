import React , { useContext, useEffect, useRef } from "react"
import {restContext} from "./../../../Reducer"
import searchIcon from "./../../../images/search.svg"
import Blacksearch from "./../../../images/Blacksearch.svg"
import arrow from "./../../../images/chevron.svg"
import check from "./../../../images/check.svg"
import BlackCheck from "./../../../images/BlackCheck.svg"
import "./Filtrs.css"




const Options = () => {
    const {state,dispatch} = useContext(restContext);

    const listenClick = (e) => {
        let clicks = ["filter","Options_filters","Options_container","Options"]
        if(!clicks.includes(e.path[0].classList[0])) {
            dispatch({type : "FILTERS"})
        }
    }

    useEffect(() => {
        window.addEventListener("click", listenClick);
        return () => {
            window.removeEventListener("click", listenClick);

        }
    },[])

    return (
        <div className="Options_filters">
            <button className="filter" name="Africa" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                Africa
                {state.options["Africa"].filter && (
                    <img src={state.Darkmode ? BlackCheck : check} alt="check" />
                )}
            </button>
            <button className="filter" name="Americas" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                America
                {state.options["Americas"].filter && (
                    <img src={state.Darkmode ? BlackCheck : check} alt="check" />
                )}
            </button>
            <button className="filter" name="Asia" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                Asia
                {state.options["Asia"].filter && (
                    <img src={state.Darkmode ? BlackCheck : check} alt="check" />
                )}
            </button>
            <button className="filter" name="Europe" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                Europe
                {state.options["Europe"].filter && (
                    <img src={state.Darkmode ? BlackCheck : check} alt="check" />
                )}
            </button>
            <button className="filter" name="Oceania" onClick={(e) => dispatch({type : "FILTER", value : e.target.name})}>
                Oceania
                {state.options["Oceania"].filter && (
                    <img src={state.Darkmode ? BlackCheck : check} alt="check" />
                )}
            </button>
        </div>    
    )
}



const Filtrs = () => {

    const {state,dispatch} = useContext(restContext);
    const SearchRef = useRef();

    const HandleClick = () => {
        SearchRef.current.focus()
    }

    return(
        <div className="Filtrs">
            <div className="Search" onClick={HandleClick}>
                <img src={state.Darkmode ? Blacksearch : searchIcon} alt="search"/>
                <input ref={SearchRef} value={state.search} onChange={(e) => dispatch({type : "SEARCH", value : e.target.value })} placeholder="Search for a country..."/>
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