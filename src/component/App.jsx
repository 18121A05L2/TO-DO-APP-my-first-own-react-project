import React from "react";
import { v4 as uuidv4 } from 'uuid';
import {useRef, useEffect} from 'react';
import Input from "./Input";
import Footer from "./Footer";
import AddInput from "./AddInput";

export default function App(){
  const displayRef = useRef(null);
  const [arr,setArr] = React.useState([])

  function buildingArray(inputText){
    setArr((prev) => {
      return [ ...prev,{
        value : inputText,
        id : uuidv4(),
        state : false,
      }]
    })}
  function deleteSelected(id){
    setArr(prev => {
      return prev.filter((val) => {
        return val.id!==id
      })
    })
  }
  function deleteAll(){
    setArr([])
  }

  function handleState(id){
    setArr(prev => {
      return prev.map(val => {
        if(val.id===id){
          return {
            value :val.value ,
            id : val.id,
            state :!val.state ,
          }
        }else {
          return val
        }
      })
    })
  }

  let [completed,setCompleted] = React.useState()
  function handleCompleted(){
    setCompleted(() => {
      return arr.filter(val => {
        return val.state===true
      })
    })
  }
  console.log(completed)
  return (
    <div className="app">
    <Input buildingArray={buildingArray} displayRef={displayRef} />
    <div className="display" ref={displayRef} id="hello">
      {arr.length==0 && <h5>You don't have any tasks</h5> }










      { arr.map((val) => {
        return  <AddInput key={uuidv4()} id={val.id} val={val.value} deleteSelected={deleteSelected} handleState={handleState} state={val.state}/>
      }) }

    </div>
    <Footer deleteAll={deleteAll} handleCompleted={handleCompleted}/>
    </div>
  );
}
