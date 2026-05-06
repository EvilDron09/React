
import './App.css'
import {AComponent} from "./component/AComponent.tsx";
import {BComponent} from "./component/BComponent.tsx";
import {useState} from "react";
import {MyContext} from "./context/MyContextProvider.tsx";

function App() {

const [themeColor, setThemeColor]=useState<string>('light')
  return (
    <>
        <MyContext.Provider value={{
        theme:themeColor,
        changeTheme:(themeValue:string)=>{
        setThemeColor(themeValue)}
        }}>
            <AComponent/>
            <BComponent/>
</MyContext.Provider>


    </>
  )
}

export default App
