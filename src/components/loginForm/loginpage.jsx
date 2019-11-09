import React from 'react';
//import ReactSignupLoginComponent from 'react-signup-login-component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap';
//import 'https://fonts.googleapis.com/icon?family=Material+Icons';
import './login.scss';
// import Login from './login';
// import Register from './register';
import { Login, Register } from "./index";
// import { connect } from 'tls';
//reducers

import { connect } from 'react-redux';
import { login, logout } from '../store/actionCreators';



class LoginPage extends React.Component {

   
        constructor(props) {
          super(props);
          this.state = {
            isLogginActive: true
          };
        }
        componentDidMount() {
            this.props.hideEverything();
            //Add .right by default
            this.rightSide.classList.add("right");
          }



        changeState=()=> {
            //ES6 Object Destructuring
            const { isLogginActive } = this.state;
          
            //We togglet component classes depending on the current active state 
            if (isLogginActive) {
              //Right side for login
              this.rightSide.classList.remove("right");
              this.rightSide.classList.add("left");
            } else {
              //Left side for Register 
              this.rightSide.classList.remove("left");
              this.rightSide.classList.add("right");
            }
            //Of course we need to toggel the isLogginActive by inversing it's previous state 
            this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
          }  

        render() {
          console.log('User'+this.props);


            const { isLogginActive } = this.state;
            const current = isLogginActive ? "Register" : "Login";
            const currentActive=isLogginActive ? "Login" : "Register";
            return (
              <div className="App" style={{paddingTop:250 }}>
                <div className="login" style={{ width:400}}>
    
                  <div className="container"  ref={ref => (this.container = ref)}>
                    {isLogginActive && (
                      <Login containerRef={ref => (this.current = ref)} />
                    )}
                    {!isLogginActive && (
                      <Register containerRef={ref => (this.current = ref)} />
                    )}
                  </div>
                        <RightSide
                            current={current}
                            currentActive={currentActive}
                            containerRef={ref => (this.rightSide = ref)}
                            onClick={this.changeState}
                        />
                </div>
              </div>
            );
          }
      }

      
      const mapStateToProps=(state)=>{
        console.log('mapStateToProps', state)
      
        
        return{
          
          user:state.user
        }
      }
      
        const mapDispatchToProps = {login }
      
      
      export default connect(mapStateToProps,mapDispatchToProps)( LoginPage);



      const RightSide = props => {
        return (
          <div
            className="right-side"
            ref={props.containerRef}
            onClick={props.onClick}
          >
            <div className="inner-container">
              <div className="text">{props.current}</div>
            </div>
          </div>
        );
      };