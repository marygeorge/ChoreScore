
import React from "react";

export const  KidDropDown =props=>
     <div className="dropdown kid-dd pull-right">
     <button className="btn btn-default dropdown-toggle dropDownBox" type="button" 
       id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
     <b className="kids">Kids</b>
     <span className="caret" ></span>
     </button>
     <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
     <li><a href="#">Name Here</a></li>
     <li><a href="#">Name Here</a></li>
     <li><a href="#">Name Here</a></li>
     <li role="separator" class="divider"></li>
     { props.addKid ?
     <li><a href="#">Add Kid</a></li>
     : "" }
     </ul>
     </div>;



