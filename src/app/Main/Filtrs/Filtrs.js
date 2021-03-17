import React , { useContext } from "react"
import restContext from "./../../../index"
import searchIcon from "./../../../images/search.svg"
import arrow from "./../../../images/chevron.svg"

const Filtrs = () => {

    const {state,dispatch} = useContext(restContext);


    return(
        <div className="Filtrs">
            <div className="Search">
                <img src={searchIcon} alt="search"/>
                <input  value={state.search} onChange={(e) => dispatch({type : "SEARCH", value : e.target.value })} placeholder="Search for a country..."/>
            </div>
            <div className="Options">
                <div className="Options_container">
                    <p>Filter by Region</p>
                    <img src={arrow} alt="options" />
                    {
                        state.optionsOpen && (
                            <div className="Options_filters">
                                <button>
                                    Africa
                                </button>
                                <button>
                                    America
                                </button>
                                <button>
                                    Asia
                                </button>
                                <button>
                                    Europe
                                </button>
                                <button>
                                    Oceania
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}


export default Filtrs