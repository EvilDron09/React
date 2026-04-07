import './App.css'
import './component/MyComponent.tsx';
import MyComponent from "./component/MyComponent.tsx";

function App() {


  return (
    <>
        <MyComponent title={'hello1'}>
        Lorem ipsum dolor sit amet.
        </MyComponent>
        <MyComponent title={'hello2'}></MyComponent>
      {MyComponent({title:'hello 3'})}

    </>
  )
}

export default App
