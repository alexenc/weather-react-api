import React, {useState, useEffect} from 'react';
import Header from "./components/Header";
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {

  // Form state
  const [search, setSearch] = useState({
    city: '',
    country: ''
})

  const [consult, setConsult] = useState(false)
  const [result, setResult] = useState({})
  const [error, setError] = useState(false)

  const {city, country} = search;

  useEffect(() => {
    const apiCall = async () => {
      if(consult){
        const appId = '72324ed9301566bbf80d88ecfbaec3c8'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
        const answer = await fetch(url)
        const result = await answer.json()
     
        setResult(result)
        setConsult(false)

        if(result.cod === '404') {
          setError(true)
        }else{
          setError(false)
        }
      }
    }
    apiCall()
  }, [consult])

  let component;
  if(error){
    component = <Error message="results not found"/>
  } else {
    component = <Weather
      result={result}
    />
  }



  return (
    <>
      <Header
        mainTitle='Weather React App'
      />
      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">              
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
