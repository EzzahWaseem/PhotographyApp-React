import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './photographers.css';
import './photographers.scss';
// bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';



import Card from './card';
import data from './data/data';
import { whileStatement } from '@babel/types';




class Photographer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  componentDidMount() {
    this.props.hideEverything();
  }





  // class component

  nextProperty = () => {
    const newIndex = this.state.property.index + 1;
   
    
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index - 1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const { properties, property } = this.state;
    return (







      <div className="App">




        <div className="page">
           {/* console.log({this.nextProperty}); */}

        
        <button type="button" 
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
          class="btn prev"
          style={{backgroundColor:"#0d47a1",
        width:100, height:40,fontSize:20}}><i class="fas fa-magic mr-1"></i>
        Prev</button>

        <button type="button" 
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length - 1}
          class="btn next" style={{backgroundColor:"#880e4f",width:100,height:40,fontSize:20}}>
        Next <i class="fas fa-magic ml-1"></i></button>

          <section>

            <h1 class="text-black-50" style={{color:"#FF8800 ", fontFamily: "Lucida Console"  }} >Our Photographers</h1>
           


          </section>
           <div className="">
          <div className={`cards-slider active-slide-${property.index}`}>

            <div className="cards-slider-wrapper" style={{
              'transform': `translateX(-${property.index * (100/properties.length)}%)`
              // transform:translateX
            }}>
              {
                properties.map(property => <Card key={property._id} property={property} />)
              }
            </div>

          </div>
       
       </div>
        </div>
      
      </div>




    );
  }
}

export default Photographer;




