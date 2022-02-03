import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { queryClient } from '.';
 

function List() {

  const [isLoaded, setLoaded] = useState<Boolean>(false)
   
  useEffect(()=>{  
    fetch('https://swapi.dev/api/people').then(res => res.json())
  .then(json => json.results[0])
  .then(result => queryClient.setQueryData('Luke', result))
  .then(()=>setLoaded(true))
  },[])

  
if(!isLoaded){
  return <div>Loading...</div>
}

  return (
    <div>
      <pre>
       All character data is loaded<br/><Link to="/character">See Luke!</Link>
     </pre>
    </div>
  );
}

export default List;


