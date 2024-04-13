import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getMovies } from '../servieces/AllApi';
import { Col, Container, Row } from 'react-bootstrap';

function Movies(serverres) {
    const [allMovie, setallMovie] = useState([])

    // fuction define 
    const getallMovies = async () => {
        const res = await getMovies()
        setallMovie(res.data)
    }
    console.log(allMovie);

    useEffect(() => {
        getallMovies()
    }, [serverres])

    return (
        <>
           {
           allMovie.map(movie=>(
            <Container className='mt-4'>
                <Row className='mt-4'>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={movie.image} />
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                {movie.description}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
           ))
           }
        </>
    )
}

export default Movies