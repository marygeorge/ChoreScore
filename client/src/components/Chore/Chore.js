
import React from "react";

export const  Chore=props=>
<div className="panel panel-default chore-item">
  <div className="panel-body">
    <div className="row">
      <div className="col-sm-8">{props.title}</div>
      {props.who==="child" ? (
      <div className="col-sm-4 text-center">
        {
         props.status=="undone"?<input type="image" value={props.roleClick} onClick={props.handleStatus} src = "/assets/redCheck.png" alt="red check" /> :
         props.status=="done"?<input type="image" value={props.roleClick} onClick={props.handleStatus}  src = "/assets/yellowCheck.png" alt="yellow check" /> :
         <img src = "/assets/greenCheck.png" alt="green check" /> 
        }
      </div>
      ):(
        <div>
        {/*parent page need only this */}
        {props.roleClick=="confirm"? <input type="image" value="deny" onClick={props.handleDeleteChore} id={props.choreid} src = "/assets/redX.png" alt="red X" />:""}
        </div>
      )}
    </div>
  </div>
</div>;



