import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import "./cardBenefit.css";


class CardBenefit extends React.Component {

  render() {
    return ( 
      <Card className="cardBenefit" style={{backgroundColor : this.props.color}}>
      <Card.Body>
        <div className="row">
          <div className="col-8">
            <Card.Title className="titleBenefit">{this.props.title}</Card.Title>
          </div>
          <div className="iconsBenefit col-1">
            <FontAwesomeIcon icon={faPen} style={{ width: "20px", marginRight: "10px"}}/>
          </div>
          <div className="iconsBenefit col-1">
            <FontAwesomeIcon icon={faTrashAlt} style={{ width: "20px", marginRight: "10px"}}/>
          </div>
        </div>
        <Card.Text className="descriptionBenefit">
        {this.props.description}
        </Card.Text>
      </Card.Body>
    </Card>
     );
  }
}

export default CardBenefit;