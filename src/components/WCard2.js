/**
 * Employee Management System -Card Component
 *********************************************
 *
 * @version 1.0.1
 * @author Manjunath V
 * @description Employee Management System - Card Component
 * @createdDate [21/01/2020]
 * ***************************************
 * @createdDate Manjunath V
 * @lastModifiedDate [21/01/2020]
 * @lastModifiedReason
 */




import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';


// const cardStyle =  { maxWidth: '30%', maxHeight: '250px' };
const cardTitleStyle = {
    color: '#56565A',
    fontSize: 20,
    fontFamily: 'benton-sans',
    fontWeight: 'bold',
    textAlign: 'left',
}

const cardImgStyle= {    cursor: "pointer"}
class WCard2 extends React.Component {

  render() {

    return (
    <div >
        {/* <a target="_blank" href={this.props.image} download> */}
      <Card  onClick={this.props.handleClick} >
        <CardImg style={cardImgStyle} width="80%" height="250px" src={this.props.image} alt="Click for download" />
        <CardBody>
          <CardTitle style={cardTitleStyle} >{this.props.cardtitletext}...</CardTitle>
          <CardSubtitle>{this.props.cardsubtitletext}...</CardSubtitle>
          <CardText>{this.props.date}</CardText>
          {/* <Button>Download Image</Button> */}
        </CardBody>
      </Card>
      {/* </a> */}
    </div>  
    );
  }
}
WCard2.propTypes={

    image:PropTypes.string,
 
    cardtitletext:PropTypes.string,
  
    //cardtext:PropTypes.string,    
    cardsubtitletext:PropTypes.string,
    date : PropTypes.string
   

}

export default WCard2;
