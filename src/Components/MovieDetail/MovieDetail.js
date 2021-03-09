import React, { useState, useEffect } from 'react';
import { CardDeck, Card, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const apiKey = '870967436c1517d581daf3b245495790';

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(res => res.json())
            .then(data => setMovie(data))
    }, [])

    const { original_title, backdrop_path, overview, popularity, release_date } = movie;

    return (
        <>
            <CardDeck className="py-5 col-6 m-auto">
                <Card>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`} />
                    <Card.Body>
                        <Card.Title>{original_title}</Card.Title>
                        <Card.Text>{overview}</Card.Text>
                        <Card.Text>Popularity: {popularity}</Card.Text>
                        <Card.Text>Release Date: {release_date}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button as={Link} to={"/home"} variant="primary">Go Home</Button>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    );
};

export default MovieDetail;