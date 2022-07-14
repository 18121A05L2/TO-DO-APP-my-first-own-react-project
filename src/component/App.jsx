import React from "react";
import Heading from "./Heading";
import Input from "./Input";
import Display from "./Display";

export default function App(){
  const [arr,setArr] = React.useState([])
  function buildingArray(value){
    setArr((prev) => {
      return [ ...prev,value]
    })}

  function deleteSelected(id){
    console.log(id)
    setArr(prev => {
      return prev.filter((val,index) => {
        return index!==id
      })
    })
  }
  return (
    <div className="app">
    <Heading/>
    <Input buildingArray={buildingArray} />
    <Display arr={arr} deleteSelected={deleteSelected} />
    </div>
  );
}
