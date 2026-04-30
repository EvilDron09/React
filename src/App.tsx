
import './App.css'
import {MenyCart} from "./components/menu/MenyCart.tsx";
import {Outlet} from "react-router-dom";

function App() {


  return (
    <>
      <MenyCart/>
        <Outlet/>
    </>
  )
}

export default App
