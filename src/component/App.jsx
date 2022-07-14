import React from "react";
import Heading from "./Heading";
import Input from "./Input";
import Display from "./Display";

export default function App(){
  const [arr,setArr] = React.useState([])
  function buildingArray(value){
    setArr((prev) => {
      return [ ...prev,value]
    })
    console.log(arr)
  }

  return (
    <div className="app">
    <Heading/>
    <Input buildingArray={buildingArray} />
    <Display arr={arr} />
    </div>
  );
}
