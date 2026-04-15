
import './App.css'
import {Outlet} from "react-router-dom";
import {Menu} from "./component/menu/Menu.tsx";

function App() {


  return (
    <>
      <Menu/>
      App
      <Outlet/>
    </>

  )
}

export default App
