import React , { useEffect, useState } from 'react';
import {doApiGet} from '../services/apiService';
import SearchBoxResults from './search_box_results';
import MoviesContainer from './movies_container';
import DarkWindow from './dark_window';
function ResultsPage(props)
{
    let [allMoviesArr,setAllMoviesArr] = useState([]);
    let [idMovie,setIdMovie] = useState("");
    let [windowClass,setWindowClass] = useState("d-none");

    useEffect(() =>
    {
      let url = ""; 

      if(props.match)
      {
        if(props.match.params.search)
        {
          url = "http://www.omdbapi.com/?s="+props.match.params.search+"&apikey=86887934"; 
        }
      }

      doApiGet(url)
      .then(data =>
      {
        setAllMoviesArr(data);
      })
    },[props.match])

    useEffect(() =>
    {
      document.getElementById("id_dark").className = windowClass;
    },[windowClass])


  return(
    <div>
        <div id="id_dark" class="dark container-fluid center d-none">
          <DarkWindow setWindowClass={setWindowClass} idMovie={idMovie}/>
        </div>
        <SearchBoxResults/>
        <MoviesContainer allMoviesArr={allMoviesArr} setIdMovie={setIdMovie} setWindowClass={setWindowClass}/>
    </div> 
  )
}

export default ResultsPage