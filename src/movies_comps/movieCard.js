import React from 'react';

function MovieCard(props)
{
    let item = props.item;

    const moreInfoPage = (_id) =>
    {
        props.setIdMovie(_id);
        props.setWindowClass("dark container-fluid center");
    }

    return(
        <div className="col-lg-3 col-sm-10 border border-secondary rounded mb-sm-3">
            <div className="pic" style={{ backgroundImage: `url(${item.Poster})` }}></div>
            <div className="text-center">
                <h4 className="my-3">{item.Title}</h4>
                <h5>{item.Year}</h5>
                <button onClick={()=>{moreInfoPage(item.imdbID)}} className="btn btn-outline-primary my-3">More info</button>
            </div>
        </div>
    )
}

export default MovieCard