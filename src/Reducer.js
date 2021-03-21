import React from "react"

const restContext = React.createContext();

const FliterCountryBySearch = (newState) => {
    let c;
    if(newState.filters.length === 0 || newState.filters.length === 5){
        c = [...newState.country]
    }else{
        c = newState.country.filter(a => {
            return newState.filters.includes(a.region) ? a : null;
        })
    }
    
    if(newState.search.length > 0){
        let name = `^${newState.search}`
        c = c.filter(a => {
            let reg = new RegExp(name,"gi")
            return reg.test(a.name);
        })
    }
    let l = Math.ceil(c.length / 8)
    let nl = [];
    for(let i = 0 ; i < l; i++){
        let nn = []
        for(let j = 0; j < 8; j++){
                nn.push(c[0]);
                c.shift();
        }
        if(nn.length > 0){
            nl.push(nn)
        }
    }
    console.log(nl)
    return nl;
}

const initalState = {
    Darkmode : false,
    search : "",
    optionsOpen: false,
    options : {
        "Africa" : {
            filter : false,
            name : "Africa"
        },"Americas" : {
            filter : false,
            name : "Americas"
        },"Asia" : {
            filter : false,
            name : "Asia"
        },"Europe" : {
            filter : false,
            name : "Europe"
        },"Oceania" : {
            filter : false,
            name : "Oceania"
        }
    },
    filters : [],
    country : [],
    filtredList : [],
    currentSection : 0
}

const reducer = (state, action) => {
    switch(action.type){
        case "MODE" : 
            return {
                ...state,
                Darkmode: !state.Darkmode
            }
        case "SEARCH" :
            let searchState ={
                ...state,
                search : action.value    
            }
            let sl = FliterCountryBySearch(searchState)
            return {
                ...searchState,
                filtredList : sl,
                currentSection : 0
            }
        case "FILTERS" :
            return {
                ...state,
                optionsOpen : !state.optionsOpen
            }
        case "FILTER" :
            let newState = {
                ...state,
                options : {
                    ...state.options,
                    [action.value] : {
                        ...state.options[action.value],
                        filter : !state.options[action.value].filter
                    }
                },
            }
            newState = {
                ...newState,
                filters : [...Object.keys(newState.options).filter( (k) => newState.options[k].filter)]
            }
            
            let nl = FliterCountryBySearch(newState)

            newState = {
                ...newState,
                filtredList : nl,
                currentSection : 0
            }
            return {
                ...newState
            }
        case "CREATE" :
            let cnewState = {
                ...state,
                country : action.value,
            }
            let cc = FliterCountryBySearch(cnewState)
            return {
                ...cnewState,
                filtredList : cc
            }
        case 'LISTLEFT' : 
            let cll = state.currentSection - 1;
            if(cll < 0){
                cll = state.filtredList.length - 1;
            }
            return {
                ...state,
                currentSection : cll
            }
        case 'LISTRIGHT' : 
            let clr = state.currentSection + 1;
            if(clr >= state.filtredList.length){
                clr = 0;
            }
            return {
                ...state,
                currentSection : clr
            }
        default : throw new Error();
    }
}


export {initalState,reducer,restContext }
