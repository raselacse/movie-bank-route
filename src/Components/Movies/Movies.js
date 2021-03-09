import React from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Movies = (props) => {
    const { id, title, poster_path } = props.movie;

    return (
        <>
            <CardDeck className="py-5 col-3 text-center">
                <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${poster_path}`} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <Button as={Link} to={"/movie-detail/" + id} variant="primary">View Details</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    );
};

export default Movies;