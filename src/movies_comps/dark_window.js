import React, { useEffect, useState } from 'react';
import { doApiGet } from '../services/apiService';

function DarkWindow(props)
{
    let [dataPage,setdataPage] = useState([]);

    useEffect(() =>
    {
      let url = "http://www.omdbapi.com/?i="+props.idMovie+"&apikey=7625131d"; 
     
      doApiGet(url)
      .then(data =>
      {
        setdataPage(data);
      })
    },[props.idMovie])

    const closeWindow = () =>
    {
        props.setWindowClass("d-none");
    }

    return(
        <div>
            <div class="dark_inside p-2 rounded col">
                <div className="col">
                    <div>
                        <div className="pic" style={{ backgroundImage: `url(${dataPage.Poster})` }}></div>
                    </div>
                    <div className="col text-left">
                        <h5 className="display-5 my-5">{dataPage.Plot}</h5>                    
                    </div>    
                    <div className="d-flex justify-content-center">
                        <button onClick={()=>{closeWindow()}} className="btn btn-outline-danger mr-4">Close</button> 
                    </div>  
                </div>                 
            </div>
        </div>
   )
}

export default DarkWindow