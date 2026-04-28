
import './App.css'
import {useEffect} from "react";
import {getAllUsers, saveYser} from "./servises/user.servise.ts";

function App() {
  useEffect(() => {
    getAllUsers().then(value => console.log(value))

    saveYser({id: 1, name:"John", email:"john@gmail.com"}).then(value => console.log(value));
  }, []);

  return (
    <>
    </>
  )
}

export default App
