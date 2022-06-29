import React from 'react'
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import '../index.css';

function Student({ student }) {
    return (
        <div className='card-container'>        
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={student.image} />
            <Card.Body>
                <Card.Title>Name: {student.name}</Card.Title>
                <Card.Text>
                    GPA: {student.gpa}
                </Card.Text>
                <Button variant="primary">Grade</Button>
            </Card.Body>
        </Card>
        </div>        
    )
}

export default Student