import { useState, useRef } from 'react'
import './App.css'
import Icons from './components/Icons.js'

function App() {
  const [values, setValues] = useState('')
  const [icon, setIcon] = useState('')

  const searchRef = useRef()

  const URL = () => `https://api.openweathermap.org/data/2.5/weather?q=${searchRef.current.value}&lang=es&units=metric&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`

  const getData = async (e) => {
    e.preventDefault()

    await fetch(URL())
      .then(res => res.json())
      //.catch(err => console.log('error is: ', err))
      .then(data => {
        if (data.cod >= 400) {
          setValues(false)
        } else {
          setIcon(data.weather[0].main)
          setValues(data)
        }
      })
      .catch(err => {
        throw new err
      })
  }

  return (
    <>
      <main className='container'>
        <h2>Climapp</h2>
        <form className='row' onSubmit={getData}>
          <input
            autoFocus
            ref={searchRef}
          />
          <button
            type='submit'
          >
            🔍
          </button>
        </form>
      </main>

      <section className='card'>
        {
          (values)
            ? (
              <div className='card-container'>
                <h1 className='city-name'>{values.name}</h1>
                <p className='temp'>{values.main.temp.toFixed(0)}&deg;</p>
                <img className='icon' src={Icons(icon)} alt='showing diferent weather around the world' />
                <div className='card-footer'>
                  <p className='temp-max-min'>{values.main.temp_min.toFixed(0)}&deg; | {values.main.temp_max.toFixed(0)}&deg;</p>
                </div>
              </div>
            ) : (<h1>
              {'Ciudad no encontada'}
            </h1>
            )}
      </section>
    </>
  )
}

export default App
