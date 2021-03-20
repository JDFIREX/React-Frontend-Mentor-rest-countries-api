import React , { useContext, useEffect, useState } from "react"
import {restContext} from "./../../../Reducer"
import "./List.css"
import SLeft from "./../../../images/angle-left.svg"
import SRight from "./../../../images/angle-right.svg"
import { Link } from "react-router-dom";


const ListItem = React.memo(({x}) => {
    return(
        <Link to={`./country/${x.id}`} >
            <div className="List_item"  data-id={x.id}>
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
        </Link>
    )
})


const Items = () => {
    const {state,dispatch} = useContext(restContext);
    const [list, setList] = useState(state.filtredList);

    useEffect(() =>{
        setList(state.filtredList[state.currentSection])
    },[state.filtredList,state.currentSection])

    return (
        <div className="List_section">
            {
                list && list.map((x,b) => {
                    let id = x.id;
                    if(id || id === 0){
                        return (
                            <ListItem key={id} x={x} />
                        )
                    }else{
                        return <div key={b}></div>;
                    }
                })
            }
        </div>
    )
}


const Slider = () => {
    const {state,dispatch} = useContext(restContext);

    return (
        <div className="Slider">
            <button className="Slider-left" onClick={() => dispatch({type : "LISTLEFT"})}>
                <img src={SLeft} alt="slider left" />
            </button>
            <div className="Slider-dots">
                {
                    state.filtredList.map((a,b) => {
                        return (
                            <div className={state.currentSection === b ? "dot currentDot" : "dot"} key={b}>
                            </div>
                        )
                    })
                }
            </div>
            <button className="Slider-right" onClick={() => dispatch({type : "LISTRIGHT"})}>
                <img src={SRight} alt="slider left" />
            </button>
        </div>
    )
}


const List = () => {

    return(
        <div className="List">
            <Slider />
            <Items/>
        </div>
    )
}


export default List