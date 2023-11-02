import React, { useState } from 'react';

function Person() {
   const [person, setPerson] = useState({ name: 'John', lastName: '', age: 100 });

   const handleInputChange = (e) => {
      setPerson({ ...person, [e.target.name]: e.target.value });
   }

   const handleIncreaseAge = () =>{
      setPerson({ ...person, age: person.age + 1 });
   }

   return (
      <>
         <input 
            type="text" 
            name="name" 
            value={person.name} 
            onChange={handleInputChange} 
            placeholder="Enter name" 
         />
         <input 
            type="text" 
            name="lastName" 
            value={person.lastName} 
            onChange={handleInputChange} 
            placeholder="Enter last name" 
         />
         <h1>{`${person.name} ${person.lastName}`}</h1>
         <h2>{person.age}</h2>
         <button onClick={handleIncreaseAge}>Increase age</button>
      </>
   );
}

export default Person;
