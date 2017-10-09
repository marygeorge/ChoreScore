
import React from "react";

export const  Reward=props=>
<div className="panel panel-default reward-item">
  <div className="panel-body">
    <div className="row">
      <div className="col-sm-9"><span className="glyphicon glyphicon-star"></span> {props.title}</div>
      <div className="col-sm-3">
      <span className="label label-default"> {props.points} </span>
     </div>  
    </div>
  </div>
</div>;



