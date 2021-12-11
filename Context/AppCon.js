
import React, { useState,useEffect } from 'react';



const AppCon = ( {children}) => {

   

         return (
                <ThemeContext.Provider  value={{ }}>
                    {children}
                </ThemeContext.Provider>
            )
            }

    export default AppCon


    export const ThemeContext = React.createContext();