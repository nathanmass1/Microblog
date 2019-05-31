import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export default class Post extends Component {
  render() {
    let { title, description, id } = this.props;
    return (
      <Card>
        <CardBody>
            <CardTitle className="font-weight-bold text-center">
            <Link to={`/posts/${id}`}><h6>{title}</h6></Link>
            </CardTitle>
            <CardText className="font-italic">{description}</CardText>
            </CardBody>
      </Card>
    )
  }
}

