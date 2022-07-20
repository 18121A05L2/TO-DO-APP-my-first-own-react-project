import React from "react";
import {useRef, useEffect} from 'react';
import images from "./images/index"
import { useMediaPredicate } from "react-media-hook";

export default function Input(props){
  const [inputText,setInputText] = React.useState("");
  function handleChange(event){
    setInputText(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    setInputText("")
    if (inputText!==""){
      props.buildingArray(inputText)
    }
  }


  let [mode,setMode] = React.useState(true)
  const lessThan700 = useMediaPredicate("(max-width:700px)")
  const moreThan700 = useMediaPredicate("(min-width:700px)")
  function handleMode(){
     if(mode){
      document.getElementsByTagName("img")[0].src = images.moon;
      document.body.style.backgroundColor = "white";
      document.getElementsByTagName('input')[0].style.backgroundColor="white";
      document.getElementsByTagName('input')[0].style.color = "hsl(235, 24%, 19%)";
      document.getElementsByTagName('footer')[0].style.backgroundColor="white";
      document.getElementsByTagName('footer')[0].style.color="hsl(234, 11%, 52%)";
      props.displayRef.current.style.backgroundColor="white";
      props.displayRef.current.style.color="hsl(235, 24%, 19%)";
      props.displayRef.current.style.boxShadow = " 0rem 0rem 1rem 0rem "
      document.getElementsByTagName('footer')[0].style.boxShadow="0rem 0rem 1rem 0rem";
      document.body.style.backgroundImage = 'url("./images/bg-desktop-light.jpg")';
      lessThan700 && ( document.body.style.backgroundImage = "url('./images/bg-mobile-light.jpg')" )
      moreThan700 && ( document.body.style.backgroundImage = "url('./images/bg-desktop-light.jpg')" )

    }else{
      document.getElementsByTagName("img")[0].src = images.brightness;
      document.body.style.backgroundColor = "hsl(235, 21%, 11%)";
      document.getElementsByTagName('input')[0].style.backgroundColor="hsl(235, 24%, 19%)";
      document.getElementsByTagName('input')[0].style.color = "white";
      document.getElementsByTagName('footer')[0].style.backgroundColor="hsl(235, 24%, 19%)";
      props.displayRef.current.style.backgroundColor="hsl(235, 24%, 19%)"
      props.displayRef.current.style.color="white";
      props.displayRef.current.style.boxShadow = ""
      document.getElementsByTagName('footer')[0].style.boxShadow="";
      document.body.style.backgroundImage = 'url("./images/bg-desktop-dark.jpg")';
      lessThan700 && ( document.body.style.backgroundImage = "url('./images/bg-mobile-dark.jpg')" )
      moreThan700 && ( document.body.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')" )
    }
    setMode(!mode)
  }

  return (<div>
    <header>
      <h1>T O D O </h1>
      <img className="brightness" src={images.brightness} onClick={handleMode}alt="light mode"/>
    </header>

    <form method="get" onSubmit={handleSubmit} >
    <input onChange={handleChange} type="text" placeholder="Create a new todo" value={inputText} />
    </form>
    </div>);
}
