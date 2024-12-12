import React ,{useState} from 'react'

const App = () => {
  const [user,setUser] = useState("")
  const handler=d=>{
    setUser(d.target.value)
  }
  
  return (
    <div>
      <center>
        Username : <input type = "text" value ={user} onChange={handler}/>
      </center>
    </div>
  )
}

export default App
