import React ,{createContext , useState, useEffect, Component} from 'react';
export const GlobalContextProvider =  createContext();
 
export default class GlobalContext extends Component{
    state ={
        baseUrl :  "http://localhost:3333/"
    }
    render(){
        return (
            <GlobalContextProvider.Provider value ={{ ...this.state }}>
                {this.props.children}
            </GlobalContextProvider.Provider>
        )
    }
} 

 
 

