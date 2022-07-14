import React from "react";

export default function AddInput(props){
  const [state,setState] = React.useState(false);
  function handleChange(){
    setState(true)
    console.log("clicked checkbox")
  }


  return (<div className="displayinput">
    <input className="checkbox" type="checkbox" name="" value="" onClick={handleChange}/>
    <p className="tasks" style={{textDecoration : state && "line-through" , textDecorationColor :"red"}} >{props.val}</p>
    <i className=" fa-solid fa-circle-minus fa-fw fa-fh"></i>
    </div>
  );
}
