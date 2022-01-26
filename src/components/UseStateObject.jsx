import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";

function UseStateObject() {
  const [person, setperson] = useState({
    firstName: "guru",
    lastName: "k",
  });

  const updateFirstName = () => {
    console.log("First name", person.firstName);
    console.log("last name", person.lastName);
    //person.firstName="ajit"
    //setperson(person)



    /* first  way  */
    // setperson({
        // ...person
    //   firstName: "megha",
    // })

    //second way
    const personCopy = { ...person };
    personCopy.firstName = "megha";
    setperson(personCopy);
  };
  useEffect(() => {
    console.log("person is changed");
  }, [person]);

  return (
    <div>
      <p>
        Full name={person.firstName}
        {person.lastName}
      </p>
      <button onClick={updateFirstName}>update first name</button>
    </div>
  );
}

export default UseStateObject;
