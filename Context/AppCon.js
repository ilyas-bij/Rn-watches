
import React, { useState,useEffect } from 'react';
import {data} from '../Data.js'





const AppCon = ( {children}) => {
    const [Data, setData] = useState(data);


    useEffect(() => {
        //car.map((i)=>  console.log(i))
        //data.map(i => console.log('hi'))

        
    console.log();
      
    }, []);


         return (
                <ThemeContext.Provider  value={{Data:Data }}>
                    {children}
                </ThemeContext.Provider>
            )
            }

    export default AppCon


    export const ThemeContext = React.createContext();