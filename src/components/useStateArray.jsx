import React, { useEffect, useState } from "react";

function useStateArray() {
  const [hobbies, sethobbies] = useState([]);
  const addHobby = () => {
    /* hobbies.push('criket)
        sethobbies(hobbies)
        */

    /* fisrt way
        sethobbies([...hobbies,"criket"]) */

    /* second way
        const hobbiesCopy=hibbies.slice(0)
        hobbiesCopy.push("criket")
        setHobbies(hobbiesCopy) */
    const hobbiesCopy = [...hobbies];
    hobbiesCopy.push("criket");
    sethobbies(hobbiesCopy);
  };
  useEffect(() => {
    console.log("hobbies is changed");
  }, [hobbies]);
  return (
    <div>
      {hobbies.map((hobby, index) => {
        return <p key={index}>{hobby}</p>;
      })}
      <button onClick={addHobby}>add</button>
    </div>
  );
}

export default useStateArray;
