/* Register.jsx */
import React from "react";
import loginImg from "./login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:"",
      email:"",
      password:"",
      number:"",
      errors:[],
      pwdState:null,
    }
  this.showValidationErr=this.showValidationErr.bind(this);
  this.clearValidationErr=this.clearValidationErr.bind(this);

  }
onInputChange=(e)=>{
this.setState({
[e.target.name]:e.target.value

})

}

  //Add New Error Object to the array {elm: msg}
  showValidationErr(elm, msg){
    this.setState((prevState) => ({
      errors: [
        ...prevState.errors, {
          elm,
          msg
        }
      ]
    }));
  }

//Remove a specific element from the array 
clearValidationErr(elm){
  this.setState((prevState) => {
    let newArr = [];
    //Add all elements from the prev array to the new one that has a different element
    //console.log(prevState.errors);
    for (let err of prevState.errors) {
      if (elm != err.elm) {
        newArr.push(err);
      }
    }
    return {errors: newArr};
  });
}

//Update Username, password, and email on change event 
onUsernameChange=(e)=> {
  this.setState({username: e.target.value});
  //We want to clear the error when ever the user type something new 
  this.clearValidationErr("username");
}

onEmailChange=(e)=> {
  this.setState({email: e.target.value});
  this.clearValidationErr("email");
}

onPasswordChange=(e)=> {
  this.setState({password: e.target.value});
  this.clearValidationErr("password");
 //By default the state is weak
 this.setState({pwdState: "weak"});
 if (e.target.value.length > 8) {
   this.setState({pwdState: "medium"});
 } else if (e.target.value.length > 12) {
   this.setState({pwdState: "strong"});
 }


}

onCellChange=(e)=> {
  this.setState({number: e.target.value});
  this.clearValidationErr("number");
}



onPasswordChange(e) {
  
    //By default the state is weak
    this.setState({pwdState: "weak"});
    if (e.target.value.length > 8) {
      this.setState({pwdState: "medium"});
    } else if (e.target.value.length > 12) {
      this.setState({pwdState: "strong"});
    }
  }
  submitRegister=(e)=> {
    //Check for all input fields and show errors if empty (you can implement other cases!)
    e.preventDefault();
    console.log(this.state);
    
    if (this.state.username == "") {
      this.showValidationErr("username", "Username is required!");
    }
    if (this.state.email == "") {
      this.showValidationErr("email", "Email is required!");
    }
    if (this.state.password == "") {
      this.showValidationErr("password", "Password is required!");
    }
    if (this.state.number == "") {
      this.showValidationErr("number", "Cell Number is required!");
    }
  }
  



  render() {
    // console.log(this.props);
    
    //NULL by default (help us check when rendering)
    let usernameErr = null,
      passwordErr = null,
      numberErr=null,
      emailErr = null;
    //Loop and find which ones has the error
    for (let err of this.state.errors) {
      //Assign the validation error message 
      if (err.elm == "username") {
        usernameErr = err.msg;
      }
      if (err.elm == "password") {
        passwordErr = err.msg;
      }
      if (err.elm == "email") {
        emailErr = err.msg;
      }
      if (err.elm == "number") {
        numberErr = err.msg;
      }
      //No (else if or else) statements cause we need to check for all possible elements
    }

    //states are by default false = (do not render)
    let pwdWeak = false,
      pwdMedium = false,
      pwdStrong = false;
    //Weak password set onlt the pwdWeak to true, cause render only the first bar 
    if (this.state.pwdState == "weak") {
      pwdWeak = true;
    } else if (this.state.pwdState == "medium") {
      //Medium pwd then render the weak and medium bars 
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState == "strong") {
      //Strong, render all the previoud bars 
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }
  console.log(this.props);
  
   
    return (
      <div className="base-container" style={{paddingTop:100}} ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" onChange={this
                .onUsernameChange, this.onInputChange} />
              <small className="danger-error">{usernameErr
                ? usernameErr
                : ""}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" onChange={this.onEmailChange,this.onInputChange} />
              <small className="danger-error">{emailErr
                ? emailErr
                : ""}
              </small>
            
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={this.onPasswordChange,this.onInputChange} />
              <small className="danger-error">{passwordErr
                ? passwordErr
                : ""}
              </small>
              {
                this.state.password && <div className="password-state">
                  <div
                    className={"pwd pwd-weak " + (pwdWeak
                      ? "show"
                      : "")}></div>
                  <div
                    className={"pwd pwd-medium " + (pwdMedium
                      ? "show"
                      : "")}></div>
                  <div
                    className={"pwd pwd-strong " + (pwdStrong
                      ? "show"
                      : "")}></div>
                </div>
              }

          

              
            </div>
            <div className="form-group">
              <label htmlFor="number">Number</label>
              <input type="text" name="number" placeholder="+92xxxxxxxxxx"  onChange={this.onCellChange,this.onInputChange}/>
              <small className="danger-error">{numberErr
                ? numberErr
                : ""}
              </small>
            
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn btn-outline-danger logBut"  onClick={this.submitRegister}>
            Register
          </button>
        </div>
      </div>
    );
  }
}



export default Register;