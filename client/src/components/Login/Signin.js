import React from "react";

const Signin = props =>
         <div className="signin-panel">
         <h2 className="logInForm">Log In</h2>
         <input onChange={props.handleChange} className="form-control" id="userName" type="name" placeholder="Username" />
         <input onChange={props.handleChange} className="form-control" id="password" type="password" placeholder="Password" />
         <div className="radioOne">
         <input onClick={props.handleChange} id="whoParent" type="radio" name="field" value="option" />
         &nbsp;Parent 
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <input onClick={props.handleChange} id="whoChild" type="radio" name="field" value="option" />
         &nbsp;Child 
         </div>
         <input onClick={props.handleSubmit} type="button" className="logIn" id="logIn" value="Log In!" />
         </div>;

export default Signin;