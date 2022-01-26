import React, { useEffect, useState } from 'react'

/* the value of the dipendency is changed the below useEffect will be
 exicuted{wrt primitive types}*/
function UseStatePrimitive() {
    const [userName,setuserName]=useState('')
    const [count,setcount]=useState(0)
    const updateName=()=>{
        console.log("updateName function called");
        setuserName('guru')
    }

useEffect(()=>{
    if(userName!==''){
        console.log("username is changed");
    }
},[userName])
useEffect(()=>{
    if(count!==0){
        console.log("count is exicuted");
    }
},[count])

 const updateCount=()=>{
     console.log("update count function called");
    setcount(count+5)
 }

    return (
        <div>
        {console.log("user state primitive returned executed")}    
        <p>user name -{userName}</p>
        <button onClick={updateName}>update names</button>{/* here username is changed will be exicuted only once because guru is not changing */}

        <p>count ={count}</p>
        <button onClick={updateCount}>click</button>{/* here the count changed will  exicute as it changes because the value will be changed */}
        </div>
    )
}
// export default UseStatePrimitive

 export default React.memo(UseStatePrimitive)// it will make functional component pure
// it will just shalow compare


/* with respect to premitive type if the dipendency of useeffect is premitive use effect will be exicuted only if the value is changed */
