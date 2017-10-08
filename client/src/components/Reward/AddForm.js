
import React from "react";

export const  AddForm=props=>
<div >
<input onChange={props.handleChange} className="form-control" id="rewardName" type="name" placeholder="Reward Name" />
<input onChange={props.handleChange}  className="form-control" id="amazonWishList" type="name" placeholder="Amazon Wish List" />
<input onChange={props.handleChange}  className="form-control" id="points" type="number" placeholder="Amount of Points" />
                       
<input onClick={props.handleSubmit} type="button" class="submitChores" id="submitChores" value="Submit" />
</div>;



