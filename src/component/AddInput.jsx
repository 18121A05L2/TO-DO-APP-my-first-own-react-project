import React from "react";

export default function AddInput(props){
  function handleChange(event){
    props.handleState(props.id)
  }
  function handleClick(){
    props.deleteSelected(props.id)
  }

  return (<div className="displayinput" >
    <input className="checkbox" type="checkbox" name="" value="" checked={props.state} onChange={handleChange}/>
    <p className="tasks" style={{
      textDecorationLine : props.state && "line-through" ,
      textDecorationColor :"#F37878" ,
      textDecorationStyle :"solid",
      textDecorationThickness:"0.25rem",
      color:props.state && "hsl(234, 11%, 52%)",
    }} >{props.val}</p>
    <i type="button" onClick={handleClick}className=" fa-solid fa-circle-minus fa-fw fa-fh"></i>
    </div>
  );
}
