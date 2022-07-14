import React from "react";

export default function Input(props){
  const [inputText,setInputText] = React.useState("");
  function handleChange(event){
    setInputText(event.target.value);
    console.log(inputText);
  }
  function handleSubmit(event){
    event.preventDefault();
    setInputText("")
    props.buildingArray(inputText)
  }
  return (<div>
    <form method="get" onSubmit={handleSubmit} >
    <input onChange={handleChange} type="text" placeholder="Create a new todo" value={inputText} />
    </form>
    </div>);
}
