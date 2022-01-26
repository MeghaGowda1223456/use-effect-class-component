// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import UseStateArray from './components/useStateArray';
// import UseStateObject from './components/UseStateObject';
// import UseStatePrimitive from './components/UseStatePrimitive';
// import PureClassComponents from './components/PureClassComponents';

function App() {
  const[isAdmin,setisAdmin]=useState(false)
  return (
    <div className="App">
     {/* <PureClassComponents/> */}
    <p>{isAdmin?"Admin":"user"}</p>
    <button  onClick={()=>{setisAdmin(!isAdmin)}}>update admin</button>
    {/* <UseStatePrimitive/> */}
    {/* <UseStateObject/> */}
    <UseStateArray/>
    </div>
  );
}

export default App;
