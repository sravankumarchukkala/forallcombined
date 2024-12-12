

import React from 'react'
import './App.css';
import FirstComp from './Week2_Day5/propsContainer/FirstComp';
import SecondComp from './Week2_Day5/propsContainer/SecondComp';
import ThirdComp from './Week2_Day5/propsContainer/ThirdComp';
import FourthComp from './Week2_Day5/propsContainer/FourthComp';



const user={
  name:"Sravan",
  city:"Vizag",
  area:"Cdk"
}

function App() {    {/*here App is the parent component and First, Sec,Thi,Fourth are the child components*/} 
  return (
    <div className="App">
    <FirstComp name={user.name}/>
    <SecondComp name={user.area}/>
    <ThirdComp name ="Sukumar"/>
    <FourthComp name ="RGV"/>
    </div>
  )
}

export default App;
