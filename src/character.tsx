import { useQuery } from 'react-query';

function Character() {

   const { isLoading, error, data } = useQuery('Luke', () =>
     fetch('https://swapi.dev/api/people/1').then(res =>
       res.json()
     ), {staleTime: 5*60*1000})
  
if(isLoading){
  return <div>Loading...</div>
}

if(error) {
    return <div>{JSON.stringify(error as any, null, 2)}</div>
}

  return (
    <div>
      <pre>
       {JSON.stringify(data, null, 2)}
     </pre>
    </div>
  );
}

export default Character;