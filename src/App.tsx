import './App.css'
import './component/MyComponent.tsx';
import MyComponent from "./component/MyComponent.tsx";

function App() {


  return (
    <>
      <MyComponent text={'hello1'}/>
      <MyComponent text={'hello2'}/>
      {MyComponent({text:'hello 3'})}

    </>
  )
}

export default App
