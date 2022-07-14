import React from "react";
import AddInput from "./AddInput"

export default function Display(props){
  const arr=props.arr;
  return (<div className="display">
    <h5>You don't have any tasks</h5>
    {arr.map((val,index) => {
      return  <AddInput key={index} val={val}/>
    })}


    <footer>
    <a href="#">All</a>
    <a href="#">Active</a>
    <a href="#">Completed</a>
    <a href="#">Clear All</a>
    </footer>
    </div>);
}
