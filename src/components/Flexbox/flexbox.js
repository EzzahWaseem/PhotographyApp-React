import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ab from '../../images/ab.jpg';
import '../../App.css';

export default class FlexBox extends React.Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col xs={6} md={5}>
                        <div>
                        <img src={ab} />
                        </div> </Col>
                    <Col xs={6} md={5}>
                        <div style={{paddingLeft:170}}>
                            <div className="about-top_agile_its">
                                <h2>About Me</h2>
                                <h5>Professional in photography</h5>
                                <p>Nulla eget mauris quis elit mollis ornare vitae ut odio. Cras tincidunt, augue vitae sollicitudin commodo, quam elit varius est, et ornare ante massa quis tellus. Mauris nec lacinia nisl. Curabitur tempus tellus et vulputate vestibulum.</p>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                                <span>Nulla eget mauris quis elit mollis ornare vitae ut odio. Cras tincidunt, augue vitae sollicitudin commodo, quam elit varius est</span>



                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }
}