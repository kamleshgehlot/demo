import ReactDOM from 'react-dom';
import React from 'react';
import Loader from '../../modules/partials/Loader.js';


export function MountLoader(){
    let div = document.createElement("div");
    div.id = "APICALLLOADER";
    document.body.appendChild(div)
    ReactDOM.render(<Loader />, div)
}
  
export function UnmountLoader(){
    var element = document.getElementById("APICALLLOADER");
    element.parentNode.removeChild(element);
}