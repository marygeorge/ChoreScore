
import React from "react";

export const  AddForm=props=>
<div >
<input onChange={props.handleChange}  className="form-control" id="choreName" type="name" placeholder="Chore Name" />
<input onChange={props.handleChange}  className="form-control" id="selectPointAmount" type="number" placeholder="Select Point Amount" />
<input onChange={props.handleChange}  className="form-control" id="dueDate" type="name" placeholder="Due Date" />
<input onChange={props.handleChange}  className="form-control" id="timeBox" type="name" placeholder="Time" />
<input onChange={props.handleChange}  className="form-control" id="schedule" type="name" placeholder="Schedule" />
                       
<input onClick={props.handleSubmit} type="button" class="submitChores" id="submitChores" value="Submit" />
</div>;



