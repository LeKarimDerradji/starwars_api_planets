import Planet from './components/Planet'
import {useEffect, useState} from 'react'
import Button from './components/Button'

function App() {
  const [planet, setPlanet] = useState([])
  const [next, setNext] = useState('')
  console.log(next)
  const [fetching, setNextFetching] = useState(false)
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
        console.log(next)
        })
      .catch((error) => {
        alert(error.message)
      })
  }, [])

  useEffect(() => {
    fetch(next)
    .then((response) => {
        if (!response.ok) {
          throw new Error("API REQUEST FAILED")
        }
        return response.json()
      })
      .then((data) => {
        console.log(data.results)
        data.results.map(planets => {planet.push(planets)})
        setNext(data.next)
        console.log(next)
        })
      .catch((error) => {

      })
  }, [fetching])

  console.log(planet)
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
          fetching={fetching}
          setNextFetching={setNextFetching}
          />)
       })}
    </div>
    <Button fetching={fetching} setNextFetching={setNextFetching}/>
    </div>
    

    </>
  );
}

export default App;
