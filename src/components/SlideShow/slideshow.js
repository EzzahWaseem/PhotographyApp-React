import React from "react";
import Slider from "react-slick";
//import './App.css';

// Slider


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}




class SlideShow extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      //slidesToScroll: 1,
      //swipeToSlide:false,
      //touchMove:true
      //dotsClass:'slick-dots'
      // arrows:true
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (

      <Slider
        {...settings}
      >
        <div className="w3layouts-banner-top">

          <div className="container">
            <div className="agileits-banner-info">
              <span>Beautifull</span>
              <h3>Photography</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin dignissim.</p>

            </div>
          </div>
        </div>
        <div className="w3layouts-banner-top w3layouts-banner-top1">
          <div className="container">
            <div className="agileits-banner-info">
              <span>Beautifull</span>
              <h3>Photography</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin dignissim.</p>

            </div>
          </div>
        </div>
        <div className="w3layouts-banner-top w3layouts-banner-top2">
          <div className="container">
            <div className="agileits-banner-info">
              <span>Awesome</span>
              <h3>Landscape</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin dignissim.</p>

            </div>

          </div>
        </div>
        <div className="w3layouts-banner-top w3layouts-banner-top3">
          <div className="container">
            <div className="agileits-banner-info">
              <span>Amazing</span>
              <h3>PEOPLE</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed blandit massa vel mauris sollicitudin dignissim.</p>

            </div>

          </div>
        </div>




      </Slider>

    );
  }
}
export default SlideShow;