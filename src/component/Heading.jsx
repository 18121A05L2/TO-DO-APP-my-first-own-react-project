import React from "react";
import images from "./images/index"

export default function Heading(){
  return <header>
    <h1>T O D O </h1>
    <img className="brightness" src={images.brightness} alt="light mode"/>
    </header>
}
