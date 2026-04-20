
import './App.css'
import {MenuApp} from "./component/menu/MenuApp.tsx";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <section>
      <MenuApp/>
      <Outlet/>
    </section>
  )
}

export default App
