//react js props kya hota hai
import React from 'react';
function PropsExample(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>You are {props.age} years old.</p>
    </div>
  );
}
export default PropsExample;

//props ek object hota hai jo parent component se child component ko data pass karne ke liye use hota hai. 
//Isme hum kisi bhi type ka data pass kar sakte hain jaise string, number, array, object, function, etc. 
//Props read-only hote hain, matlab child component me unhe modify nahi kiya ja sakta.
//Props ko access karne ke liye hum 'props' parameter ka use karte hain jo function component me pass hota hai.
//Example me humne 'name' aur 'age' props ko access karke unhe display kiya hai.
//Is component ko use karne ke liye hum ise kisi parent component me is tarah call kar sakte hain:
// <PropsExample name="John" age={30} />
//Yahan humne 'name' aur 'age' props ko parent component se child component me pass kiya hai.
//Jab hum ise render karenge to output hoga:
// Hello, John!
// You are 30 years old.
//Is tarah se hum React me props ka use karke components ke beech data transfer kar sakte hain.

