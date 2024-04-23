
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <>
      <h1 className='text-5xl text-purple-500'>Cold Coffees: {coffees.length}</h1>

      <div className='grid grid-cols-2 space-y-4'>
        {
          coffees.map(coffee => <CoffeeCard coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
