
import './App.css'
import { puppyList } from './data.js'
import { useState } from 'react'


function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  console.log(puppies);

  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log(featPupId) 


  return (
    <>
      <div className="App">
        <h1>Hi There!!!</h1>
        {
          puppies.map((puppy) => {
            return <p onClick={() => {
              // {()=>{console.log("puppy id: ", puppy.id)}}
              setFeatPupId(puppy.id)
            }} key={puppy.id}>{puppy.name}</p>;
          })
        }
       {featPupId && <p>{featPupId}</p>} 


       {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}

      </div>
    </>
  )
}


export default App
