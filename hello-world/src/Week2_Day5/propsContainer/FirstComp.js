

import React from 'react'

const FirstComp = (props) => {  {/*we can write anyname here, but writing props is good convention */}

    console.log(props)
  return (
    <div>
      {props.name}{/*if we want to show data which is coming from variables, then we have to write it in curly braces */}
    </div>
  )
}

export default FirstComp

