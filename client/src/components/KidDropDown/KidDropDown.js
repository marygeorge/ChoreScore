
import React from "react";

export const  KidDropDown =props=>
     <div className="dropdown kid-dd pull-right">
     <button className="btn btn-default dropdown-toggle dropDownBox" type="button" 
       id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
     <b className="kids">Kids</b>
     <span className="caret" ></span>
     </button>
     <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
     {props.kids.map((kid,i)=>
             <li>
               <button key={i} className="text-btn" id={kid.childid} value={kid.childName} type="button" onClick={props.handleKidChange} > 
               {kid.childName} 
               </button>
             </li>
              )}
     <li role="separator" className="divider"></li>
     { props.addKid ?
     <li><button id="btnAddKid" className="text-add-kid-btn">Add Kid</button></li>
     : "" }
     </ul>
     </div>;



