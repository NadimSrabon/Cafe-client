
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';
import { useState } from 'react';
import Navbar from './Navbar';

function App() {

  const loadedCoffees = useLoaderData();

  const [coffees, setCoffees] = useState(loadedCoffees);


  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-5xl text-purple-500 pt-10'>Cold Coffees: {coffees.length}</h1>

      <div className='grid grid-cols-2 space-y-4'>
        {
          coffees.map(coffee => <CoffeeCard coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>

    </>
  )
}

export default App
