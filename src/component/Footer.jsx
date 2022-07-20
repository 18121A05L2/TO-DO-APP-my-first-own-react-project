import React from "react";

export default function Footer(props){
  function handleCompleted(){
    props.handleCompleted()
  }
  return (
    <footer>
    <span >All</span>
    <span >Active</span>
    <span onClick={handleCompleted} >Completed</span>
    <span onClick={() => props.deleteAll()}>Clear All</span>
    </footer>
  );
}
