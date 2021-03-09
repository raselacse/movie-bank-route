import React, { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';

/*
* API_KEY : api_key=870967436c1517d581daf3b245495790
* Popular Movie API: https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=<api_key>>
* Search API : https://api.themoviedb.org/3/search/company?query=<<QUERY>>&api_key=<<api_key>>&page=1
* Find By ID: https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
* Image - https://image.tmdb.org/t/p/w1280
*/ 

const apiKey='870967436c1517d581daf3b245495790';

const Home = () => {
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            setMovie(data.results)
            console.log(data.results)
        })
    },[])
    return (
        <>
            {
                movie.map(movie => <Movies movie={movie} key={movie.id}></Movies>)
            }
        </>
    );
};

export default Home;