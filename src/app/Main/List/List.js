import React , { useContext } from "react"
import restContext from "./../../../index"
import "./List.css"


const Items = ({list,filters}) => {

    let c;
    if(filters.length === 0 || filters.length === 5){
        c = [...list]
    }else{
        c = list.filter(a => {
            return filters.includes(a.region) ? a : null;
        })
    }

    let l = Math.ceil(c.length / 8)
    let nl = [];

    for(let i = 0 ; i < l; i++){
        let nn = []
        for(let j = 0; j < 8; j++){
            if(c[0]){
                nn.push(c[0]);
                c.shift();
            }
        }
        nl.push(nn)
    }

    return (
        <>
            {
                nl.map((a,b) => {
                    return (
                        <div className="List_section" key={b}>
                            {
                                a.map(x => {
                                    return (
                                        <div key={x.id} className="List_item">
                                            <div className="item_flag">
                                                <img src={x.flag} alt='flag' />
                                            </div>
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
            }
        </>
    )
}



const List = () => {

    const {state,dispatch} = useContext(restContext);

    return(
        <div className="List">
            <React.Suspense  fallback="loading">
                {
                    <Items list={state.country} filters={state.filters} />
                }
            </React.Suspense>
        </div>
    )
}


export default List