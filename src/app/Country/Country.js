import React, { useEffect, useState, useContext } from "react"
import {
    Link,
    useParams,
} from "react-router-dom";
import {restContext} from "./../../Reducer"
import "./Country.css"
import BackArrow from "./../../images/BackArrow.svg"
import BlackBackArrow from "./../../images/BlackBackArrow.svg"



const Country = () => {
    
    let {id} = useParams()
    const [CurrentCountry, setCurrentCountry] = useState(null)
    const {state} = useContext(restContext);

    useEffect(() => {
            setCurrentCountry(state.country[id])
    },[id])

    return(
        <>
        {
            CurrentCountry && (
                <div className="Country" key={CurrentCountry.id}>
                    <Link to="/" >
                        <div className="back">
                            <img src={state.Darkmode ? BlackBackArrow : BackArrow} alt="Back" />
                            <p>Back</p>
                        </div>
                    </Link>
                    <div className="Country_main">
                        <div className="Country_flag"
                            style={{
                                backgroundImage : `url(${CurrentCountry.flag})`,
                                backgroundRepeat : "no-repeat",
                                backgroundSize : "cover",
                                backgroundPosition : "center"
                            }}
                        >
                        </div>
                        <div className="Country_info">
                            <div className="header">
                                <h1>{CurrentCountry.name}</h1>
                            </div>
                            <div className="info">
                                <div className="info_left">
                                    <p>Native Name: <span>{CurrentCountry.nativeName}</span></p>
                                    <p>Population: <span>{CurrentCountry.population}</span></p>
                                    <p>Region: <span>{CurrentCountry.region}</span></p>
                                    <p>Sub Region: <span>{CurrentCountry.subRegion}</span></p>
                                    <p>Capital: <span>{CurrentCountry.capital}</span></p>
                                </div>
                                <div className="info_right">
                                    <p>Top Level Domain: <span>{CurrentCountry.topLevelDomain}</span></p>
                                    <p>Currencies: <span>{CurrentCountry.currencies}</span></p>
                                    <p>languages : {CurrentCountry.languages.map((a,b) => {
                                        return (
                                            <span key={b}>
                                                {b + 1 === CurrentCountry.languages.length ? `${a}` : `${a},`}
                                            </span>
                                        )
                                    })}</p>
                                </div>
                            </div>
                            <div className="Country_bordes">
                                    <p className="borders">Border Countries: </p> {CurrentCountry.borderCountries.map((a,b) => {

                                            let borderId = state.country.filter(x => {
                                                if(a === x.name){
                                                    return [...id];
                                                }else return null;
                                            })
                                        
                                        return (
                                            <Link to={`/country/${borderId[0].id}`} key={b}>
                                                <div className="border">
                                                    <p className="border_p">{a}</p>
                                                </div>
                                            </Link>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}


export default Country