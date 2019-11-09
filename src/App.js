import React from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Ab from './images/ab.jpg'
import Font from './fonts/fontawesome-webfont.eot?v=4.7.0'
//import FlexBox from './components/Flexbox/flexbox';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { IndexRoute } from "react-router";

// Components
import About from './components/about/about';
import Photographer from './components/Photographers/photographers';
import LightboxPage from './components/lightbox/lightbox';
import LoginPage from './components/loginForm/loginpage';
//import './components/loginForm/login.css';
import SlideShow from './components/SlideShow/slideshow';


// import { connect } from 'react-redux';
// import { login, logout } from './components/store/actionCreators';



class App extends React.Component {

  state = {
    showBanner: true,
  }

  renderBanner = () => {
    return (
      <div className="banner-top" >

        <div className="w3_navigation" >
          <div className="container" style={{marginLeft:5,marginRight:5}} >
            <nav className="navbar navbar-default" style={{width:1450 }}>
              <div className="navbar-header navbar-left" >
               
                <h1 style={{marginRight:1500}}><a className="navbar-brand w3_navigation" style={{ fontSize:30}}  href="index.html"><i className="fa fa-camera" aria-hidden="true"></i> Lence Trence  <p className="logo_w3l_agile_caption" style={{ fontSize:15}}>Studio</p></a></h1>
              </div>

              <div className="collapse navbar-collapse navbar-right" id="bs-example-navbar-collapse-1" style={{marginLeft:250}}>

                <nav className="menu menu--iris nav-flex-icons navbar-expand">
                  <ul className="nav navbar-nav menu__list " 
                  
                 >

                    <li className="menu__item menu__link scroll "> <Link to={"/"} exact >Home</Link></li>

                  
                    <li className="menu__item menu__link scroll">  <Link to={"/lightbox"} >Portraits</Link></li>

                    

                    <li className="menu__item menu__link scroll">  <Link to={"/photographers"} >Photographers</Link>    </li>

                  

                    <li className="menu__item menu__link scroll">
                      <Link to={"/about"} >About</Link>
                    </li>


                    <li className="menu__item menu__link scroll">

                      <Link to={"/login"} >Login</Link>

                    </li>

                   

                  </ul>

                </nav>

              </div>

            </nav>

          </div>
        </div>

        <div className="banner-silder">
          <div id="JiSlider" className="jislider">

            {/* <SlideShow /> */}


          </div>
        </div>
      </div>
    )
  }

  renderStats = () => {
    return (
      <React.Fragment>


        <div className="about" id="about">

          {/* <About/> */}


          <div className="tooltip-content">

            <div className="modal fade features-modal" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h4 className="modal-title">Some few words</h4>
                  </div>
                  <div className="modal-body">
                    <img src="./images/g4.jpg" alt="Photostat" />
                    <h5>Fishing Season Now Open</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent varius lectus vitae porttitor fringilla. Donec turpis orci, elementum a nunc quis, maximus varius ipsum. Sed bibendum ex in dignissim bibendum.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* MY PHOTOS */}
          <div className="banner-bottom jarallax" id="services">
            <div className="agile_overlay">
              <div className="container">
                <div className="agileits_heading_section">
                  <h3 className="wthree_head two">WHAT I CREATE</h3>
                  <p className="w3l_sub_para_agile">For Digital Life</p>

                </div>
                <div className="inner_w3l_agile_grids">
                  <div className="col-md-4 w3ls_banner_bottom_grid">
                    <div className="w3l_banner_bottom_grid1">
                      <i className="fa fa-camera" aria-hidden="true"></i>
                    </div>
                    <h4>Urban Exploration</h4>
                    <p>Curabitur quis egestas diam. Vivamus ut libero ut metus tempor scelerisque nec ac turpis.tempor scelerisque nec</p>
                  </div>
                  <div className="col-md-4 w3ls_banner_bottom_grid">
                    <div className="w3l_banner_bottom_grid1">
                      <i className="fa fa-camera-retro" aria-hidden="true"></i>
                    </div>
                    <h4>Shoot Amazing Films</h4>
                    <p>Curabitur quis egestas diam. Vivamus ut libero ut metus tempor scelerisque nec ac turpis.tempor scelerisque nec</p>
                  </div>
                  <div className="col-md-4 w3ls_banner_bottom_grid">
                    <div className="w3l_banner_bottom_grid1">
                      <i className="fa fa-video-camera" aria-hidden="true"></i>
                    </div>
                    <h4>Best Photographer</h4>
                    <p>Curabitur quis egestas diam. Vivamus ut libero ut metus tempor scelerisque nec ac turpis.tempor scelerisque nec</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats jarallax" id="stats">
          <div className="agile_overlay2">
            <div className="container">
              <div className="agileits_heading_section">
                <h3 className="wthree_head two">Stats</h3>
                <p className="w3l_sub_para_agile">For Digital Life</p>

              </div>
              <div className="inner_w3l_agile_grids">
                <div className="col-md-3 w3layouts_stats_left w3_counter_grid">
                  <i className="fa fa-picture-o" aria-hidden="true"></i>
                  <p className="counter">1,546</p>
                  <h3>Complete Projects</h3>
                </div>
                <div className="col-md-3 w3layouts_stats_left w3_counter_grid1">
                  <i className="fa fa-smile-o" aria-hidden="true"></i>
                  <p className="counter">14,345</p>
                  <h3>Happy Clients</h3>
                </div>
                <div className="col-md-3 w3layouts_stats_left w3_counter_grid2">
                  <i className="fa fa-trophy" aria-hidden="true"></i>
                  <p className="counter">563</p>
                  <h3>Awards Won</h3>
                </div>
                <div className="col-md-3 w3layouts_stats_left w3_counter_grid3">
                  <i className="fa fa-camera" aria-hidden="true"></i>
                  <p className="counter">2,874</p>
                  <h3>Our Clicks</h3>
                </div>
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>


        <div className="contact-w3-agile1 map" dataAos="flip-right">

          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100949.24429313939!2d-122.44206553967531!3d37.75102885910819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1472190196783" className="map" style={{ border: 0 }} allowfullscreen=""></iframe> */}

          {/* <Contact /> */}

        </div>
      </React.Fragment>
    )
  }

  hideEverything = () => {
    this.setState({
      showBanner: false,
    })
  }

  componentDidUpdate() {
    console.log("TEST");
  }

  render() {

    return (
      <Router>
        <div>

          {this.renderBanner()}
          
          <Switch>
            <Route path='/' exact component={SlideShow} />
            <Route path="/lightbox" exact render={(props) => <LightboxPage {...props} hideEverything={this.hideEverything} />} />
            <Route path="/photographers" exact render={(props) => <Photographer {...props} hideEverything={this.hideEverything} />} />
            <Route path="/about" exact render={(props) => <About {...props} hideEverything={this.hideEverything} />} />
            <Route path="/login" exact render={(props) => <LoginPage {...props} hideEverything={this.hideEverything} />} />
          </Switch>
          
          {/* 
            if (this.state.showBanner === false ) {
              <SlideShow/>
            }
          */}
          {this.state.showBanner && this.renderStats()}



          
        </div>
       

      </Router>
    );
  }
}

export default App;



