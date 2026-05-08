
import './App.css'
import {LeftBranch} from "./component/LeftBranch.tsx";
import {RightBranch} from "./component/RightBranch.tsx";
import {init, MyContext} from "./context/MyContext.tsx";
import {useState} from "react";

function App() {

    const [counter, setCounter] =useState<number>(init.counterValue)

  return (
    //   викликає контекст та змушує виконувати дерево компонентів описаний в контексти код
    <>
      <MyContext.Provider value={{
        counterValue:counter  ,
        increment:(obj)=>{
          setCounter(++obj)
        }
      }}>
        <LeftBranch/>
        <RightBranch/>
      </MyContext.Provider>

    </>
  )
}

export default App
