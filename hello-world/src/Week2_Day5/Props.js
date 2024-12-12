import React from 'react'

const Props = (properties) =>{
    console.log(properties)
return ( 
    <div>
<h1>
    Hello {properties.name} a.k.a {properties.age}
</h1>
{properties.children}
</div>
)
}

export default Props