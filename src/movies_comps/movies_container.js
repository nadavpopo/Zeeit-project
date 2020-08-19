import React from 'react';
import MovieCard from './movieCard';

function MoviesContainer(props)
{
    let movies = props.allMoviesArr;

    return(
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    {(movies.Response == "True" ) ?
                        movies.Search.map(item =>
                        {
                            return(
                                    <MovieCard item = {item}  setIdMovie={props.setIdMovie} setWindowClass={props.setWindowClass}/>
                            )}):<h3>No matching results found, please try again</h3>                                
                        }  
                </div> 
            </div>
        </div>
    )
}

export default MoviesContainer

