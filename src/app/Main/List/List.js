import React , { useContext, useEffect, useState } from "react"
import restContext from "./../../../index"
import "./List.css"


const Items = () => {
    const {state,dispatch} = useContext(restContext);
    const [list, setList] = useState(state.filtredList);

    useEffect(() =>{
        setList(state.filtredList[state.currentSection])
    },[state.filtredList,state.currentSection])

    return (
        <>
            {/* {
                nl.map((a,b) => {
                    return (
                        <div className="List_section" key={b} data-id={b}>
                            {
                                a.map(x => {
                                    return (
                                        <div key={x.id} className="List_item" data-id={x.id}>
                                            <div className="item_flag" style={{
                                                backgroundImage : `url(${x.flag})`,
                                                backgroundRepeat : "no-repeat",
                                                backgroundSize : "cover",
                                                backgroundPosition : "center"
                                            }} ></div>
                                            <div className="item_header">
                                                <h1>{x.name}</h1>
                                                <p>Population: <span>{x.population}</span> </p>
                                                <p>Region: <span>{x.region}</span> </p>
                                                <p>Capital: <span>{x.capital}</span> </p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            } */}
            <div className="List_section" key={state.currentSection}>
            {
                list && list.map(x => {
                    return (
                        <div key={x.id} className="List_item" data-id={x.id}>
                            <div className="item_flag" style={{
                                backgroundImage : `url(${x.flag})`,
                                backgroundRepeat : "no-repeat",
                                backgroundSize : "cover",
                                backgroundPosition : "center"
                            }} ></div>
                            <div className="item_header">
                                <h1>{x.name}</h1>
                                <p>Population: <span>{x.population}</span> </p>
                                <p>Region: <span>{x.region}</span> </p>
                                <p>Capital: <span>{x.capital}</span> </p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}



const List = () => {

    return(
        <div className="List">
            <>
                <Items/>
            </>
        </div>
    )
}


export default List