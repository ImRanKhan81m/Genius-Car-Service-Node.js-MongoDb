import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Expert.css'

const Expert = ({ expert }) => {
    const { name, img } = expert
    return (
        <Col lg='4' md='6' sm='12' className='column p-3'>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <button className='btn btn-primary'>See About</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;