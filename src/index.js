import React, { useReducer,useEffect} from "react"
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Design from "./design/desktop-design-home-dark.jpg"
import "./index.css"
import {initalState,reducer,restContext } from "./Reducer.js"
const Nav = React.lazy(() => import('./app/Nav/Nav'));
const Main = React.lazy(() => import('./app/Main/Main'));



const Root = () => {
    

    const [state,dispatch] = useReducer(reducer,initalState)

    useEffect(() => {
        state.Darkmode ? 
            document.querySelector(".body").classList.add("root-DarkMode") : 
            document.querySelector(".body").classList.remove("root-DarkMode"); 
    },[state.Darkmode])

    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
        .then(response => response.json())
        .then((r) => {
            let c = r.map((x,b) => {

                let l = x.population;
                l = l.toString().split("").reverse()
                let ll = l.length;
                let lm;
                if(ll % 3 === 0){
                    lm = (ll / 3) - 1; 
                }else if( ll % 3 !== 0 && ll / 3 < 0){
                    lm = 0;
                }else {
                    lm = Math.floor(ll / 3)
                }
                for(let i = 1; i <= lm; i++){
                    l.splice((i * 3 + (i - 1)),0,",")
                }
                

                return{
                    id : b,
                    name : x.name,
                    nativeName : x.nativeName,
                    population : l.reverse().join(""),
                    region : x.region,
                    flag : x.flag,
                    subRegion : x.subregion,
                    capital : x.capital,
                    borderCountries : x.borders.map(x => {
                        return r.filter(a => a.alpha3Code === x && a.name)[0].name
                    }),
                    topLevelDomain : x.topLevelDomain[0],
                    currencies : x.currencies[0].name,
                    languages : x.languages.map(r => r.name)
                }

            })

            dispatch({type : "CREATE" , value : c})
        })
    },[])

    return (
        <React.Suspense fallback={<h1>loading...</h1>}>
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
        </React.Suspense>
    )

}



ReactDOM.render(<Root />, document.querySelector('#root'))