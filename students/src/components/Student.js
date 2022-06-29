import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

function Student({ student }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={student.image} width={150} />
            <Card.Body>
                <Card.Title>Name:{student.name}</Card.Title>
                <Card.Text>
                    GPA: {student.gpa}
                </Card.Text>
                <Button variant="primary">Grade</Button>
            </Card.Body>
        </Card>
    )
}

export default Student