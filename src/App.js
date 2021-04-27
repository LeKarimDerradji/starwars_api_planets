import Planet from './components/Planet'
import {useEffect, useState} from 'react'
import Button from './components/Button'



function App() {
  const [planet, setPlanet] = useState([])
  //const [next, setNext] = useState('')
  const [page, setPage] = useState(1);

  const fetching = () => {
    setPage(page + 1);
  };

  /*
  useEffect(() => {
    fetch('https://swapi.dev/api/planets/')
    .then((response) => {
        if (!response.ok) {
          throw new Error("API REQUEST FAILED")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data.results)
        setPlanet(data.results)
        setNext(data.next)
        })
      .catch((error) => {
        alert(error.message)
      })
  }, [])*/

  useEffect(() => {
    fetch(`https://swapi.dev/api/planets/?page=${page}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(
          "Nous n'avons pas pu récupérer des informations requises."
        );
      })
      .then((data) => {
        console.log(data);
        setPlanet(planet => [...planet, ...data.results]);
      })
      .catch((error) => console.log(error.message));
  }, [page]);

  return (
    <>
    <div className='container h-80vh'>
    <h1 className='mb-5 display-1 text-black'>All the Info about Star-Wars Planets !</h1>
    <div className="row gap-2">
    
    {planet.map(planet => {  
      return (<Planet
          key={planet.name} 
          name={planet.name}
          population={planet.population}
          climate={planet.climate}
          />)
       })}

    </div>
    <Button fetching={fetching}/>
    </div>
    

    </>
  );
}

export default App;
