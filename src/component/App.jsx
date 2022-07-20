import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {useRef, useEffect} from 'react';
import Input from "./Input";
import Footer from "./Footer";
import AddInput from "./AddInput";

export default function App(){
  const displayRef = useRef(null);
  const  aiRef = useRef(null)


  const [arr,setArr] = React.useState([])
  function buildingArray(value){
    setArr((prev) => {
      return [ ...prev,value]
    })}

  function deleteSelected(id){
    setArr(prev => {
      return prev.filter((val,index) => {
        // console.log(id +"  = "+ val)
        return index!==id
      })
    })
  }
  function deleteAll(){
    setArr([])
  }
  let [completed,setCompleted] = React.useState()
  function handleCompleted(){
    
  }

  return (
    <div className="app">
    <Input buildingArray={buildingArray} displayRef={displayRef} aiRef={aiRef}/>
    <div className="display" ref={displayRef} id="hello">
      {arr.length==0 && <h5>You don't have any tasks</h5> }
      {arr.slice(0,5).map((val,index) => {
        return  <AddInput key={uuidv4()} id={index} val={val} deleteSelected={deleteSelected} hello={aiRef}/>
      })}
    </div>
    <Footer deleteAll={deleteAll} handleCompleted={handleCompleted}/>
    </div>
  );
}
