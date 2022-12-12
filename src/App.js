import { useState, useEffect } from "react";
import './app.css'

export default function App() {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");


  // // useEffect(() => {
  // //   console.log("useEffect will work on time ")
  // // } , []);

  useEffect(() => {
    if(name || phone){
    const debounceSearch =   setTimeout(() => {
      }, 1200);
     return() => {clearTimeout(debounceSearch)}
    }
  } , [name , phone]);
  

  return (
    <div className="App">
      <label>Name</label>
      <input onChange={(e) => setName(e.target.value)} value={name} />
      <br/>
      <label>Phone</label>
      <input onChange={(e) => setphone(e.target.value)} value={phone} />
      <br/>

      <p>
        name : {name}
        <br/>
        phone : {phone}
      </p>
    </div>
  );
}
