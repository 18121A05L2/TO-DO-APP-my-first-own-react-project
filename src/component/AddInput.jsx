import React from "react";

export default function AddInput(props){
  const [state,setState] = React.useState(false);
  function handleChange(){
    setState(!state)
  }
  function handleClick(){
    props.deleteSelected(props.id)
  }

  return (<div className="displayinput" ref={props.hello}>
    <input className="checkbox" type="checkbox" name="" value="" onClick={handleChange}/>
    <p className="tasks" style={{
      textDecorationLine : state && "line-through" ,
      textDecorationColor :"#F37878" ,
      textDecorationStyle :"solid",
      textDecorationThickness:"0.25rem",
      color:state && "hsl(234, 11%, 52%)",
    }} >{props.val}</p>
    <i type="button" onClick={handleClick}className=" fa-solid fa-circle-minus fa-fw fa-fh"></i>
    </div>
  );
}
