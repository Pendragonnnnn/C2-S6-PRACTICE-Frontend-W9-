import { useState } from "react";
import App from "../App";

export default function StuffForm({sendValue}) {
  const [name, setName]=useState("");
  const [price, setPrice]=useState(0);

  function handleClick(e){
    e.preventDefault()

    const newObject = {
      name: name, 
      price: price
    }
    sendValue(newObject);
    console.log(name + ": " + price)
  }

  return (
    <form className="stuff-form">
      <p>Stuff name</p>
      <input type="search" placeholder="Banana" onChange={(e) => setName(e.target.value)} />

      <p>Stuff price</p>
      <input type="search" placeholder="15" onChange={(e) => setPrice(e.target.value)} />

      <button onClick={handleClick}>Add Stuff</button>
    </form>
  );
}
