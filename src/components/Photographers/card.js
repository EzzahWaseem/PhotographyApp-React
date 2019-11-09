import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, name} = property;
    console.log(picture);
    return (
        <div id={`card-${index}`} className="card text-center">
            <div className="overflow">
            <img class={`card-img-top rounded img-fluid card-img active-img-${property.index}`}  src={picture} alt={name} />
            <div className="details card-body">
                <span className="index">{index+1}</span>
                <p className="location card-text">
                    <h1 className="card-title">{name}</h1>
                    
                    {/* <br />
                    {address} */}
                </p>
                {/* <ul className="features">
                    <li className="icon-bed">{bedrooms} <span>bedrooms</span></li>
                    <li className="icon-bath">{bathrooms} <span>bathrooms</span></li>
                    <li className="icon-car">{carSpaces} <span>parking spots</span></li>
                </ul> */}
                
            </div>
            <a  className="btn btn-outline-success btn-size font-weight-bolder fa-font-awesome-alt " style={{fontSize:15 , borderRadius:8 }}>Book Now</a>
            </div>
        </div>
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;