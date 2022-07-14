import React from "react";
import AddInput from "./AddInput";
import { v4 as uuidv4 } from 'uuid';

export default function Display(props){
  const arr=props.arr;
  function handleActive(){
    console.log("handle active")
  }
  return (<div className="display">
    <h5>You don't have any tasks</h5>
    {arr.slice(0,5).map((val,index) => {
      return  <AddInput key={uuidv4()} id={index} val={val} deleteSelected={props.deleteSelected}/>
    })}

    <footer>
    <a href="#" >All</a>
    <a href="#" onClick={handleActive}>Active</a>
    <a href="#">Completed</a>
    <a href="#">Clear All</a>
    </footer>
    </div>);
}
