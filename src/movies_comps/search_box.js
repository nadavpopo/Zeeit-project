import React , { useRef } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBox(props)
{
    const val = useRef("");
    const history = useHistory();
  
    const search = (event) =>
    {
        if(val.current.value == "")
        {
            history.push("/"+val.current.value);
        }
        else
        {
            if (event.keyCode == 13)
            {
                history.push("/resultsPage/"+val.current.value);
                val.current.value = ""; 
            }
            else
            {
                // if(props.match)
                // {
                //     if(props.match.params.search)
                //     {
                //         if (val.current.value =! props.match.params.search)
                //         {
                //             alert(val.current.value);
                //             alert(props.match.params.search);
                //             history.push("/resultsPage/");
                //             val.current.value = ""; 
                //         }
                //     }
                // }
            }
        }
    }

    return(
        <div >  
            <input placeholder="Search and press Enter" className="form-control" type="text" onKeyUp={search} ref={val}/>
        </div> 
    )
}

export default SearchBox
