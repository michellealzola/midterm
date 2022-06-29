import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Student({ student }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src='NatureData-02.png' width={150} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>


    )
}

export default Student