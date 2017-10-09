
import React from "react";

export const  AddForm=props=>
<div >
<input onChange={props.handleChoreChange()} className="form-control" id="choreName" type="name" placeholder="Chore Name" />
<input onChange={props.handleChoreChange()} className="form-control" id="choreDesc" type="name" placeholder="Chore Description" />
<input onChange={props.handleChoreChange()} className="form-control" id="selectPointAmount" type="name" placeholder="Enter Point Amount" />
<input onChange={props.handleChoreChange()} className="form-control" id="startDate" type="email" placeholder="Date/ Start date" />
<input onChange={props.handleChoreChange()} className="form-control" id="type" type="username" placeholder="Select type" />
<input onChange={props.handleChoreChange()} className="form-control" id="mandatory"  placeholder="Schedule" hidden="hidden" />
                       
<input type="button" class="submitChores" id="submitChores" value="Submit" />
</div>;



