import React from 'react';
//import ReactSignupLoginComponent from 'react-signup-login-component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import FlexBox from '../Flexbox/flexbox';
import './about.css';
import ezzah1 from './images/ezzah1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faStar  } from '@fortawesome/free-solid-svg-icons'
// import {ezzah2} from './images/ezzah2.jpg';
// import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';


class About extends React.Component{
constructor(){
super()


}
componentDidMount() {
    this.props.hideEverything();
  
  }

render(){
    return (
        
        <div className="container">
            <div class="col-xl-5 col-md-4 mb-3 text-center">

                <img src={ezzah1} class="imgStyles"
                    alt="Responsive image"/>
              
              
             <div className="para">
                   <div className="about_icon" >
                   {/* <i class="fas fa-cannabis"></i> */}
                   <FontAwesomeIcon className="about_icon" icon={faStar} />

                        {/* <span style={{fontSize: 48, color: "Dodgerblue"}}>
                            <i className="fas fa-camera"></i>
                        </span> */}

                   </div>
                   <div className="about_para">

                   <h2>Ezzah Waseem</h2>
                                <h5>Professional in photography</h5>
                                <p>Nulla eget mauris quis elit mollis ornare vitae ut odio. Cras tincidunt, augue vitae sollicitudin commodo, quam elit varius est, et ornare ante massa quis tellus. Mauris nec lacinia nisl. Curabitur tempus tellus et vulputate vestibulum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                <span>Nulla eget mauris quis elit mollis ornare vitae ut odio. Cras tincidunt, augue vitae sollicitudin commodo, quam elit varius est</span>

                      

                   </div>
             </div>
             </div>
            {/* <FlexBox /> */}
        </div>
        
  );
  }


}





export default About;