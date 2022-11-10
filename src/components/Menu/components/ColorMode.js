import React from "react";

 export const ColorModeContext = React.createContext({
    mode:"",
    setMode: (mode)=>{mode}
})

export default function ColorModeProvider(props) {
    console.log(props)
    const [mode,setMode] = React.useState(props.initialMode);
    return (
        <ColorModeContext.Provider value={{mode: mode, setMode:setMode}}>
           {props.children}
        </ColorModeContext.Provider>
    )
}