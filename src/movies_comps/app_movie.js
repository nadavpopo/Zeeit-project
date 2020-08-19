import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from './home_page';
import ResultsPage from './results_page';
function AppMovie(props)
{
    return(
        <div>
            <Router>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/resultsPage/:search" component={ResultsPage}/>
            </Router>
        </div> 
    )
}

export default AppMovie