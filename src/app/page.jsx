'use client'
import Image from 'next/image'
import Link from 'next/link'
import Card from './tickets/Card'
import data from '../../data/db.json' 
import { useEffect, useState } from 'react'




async function getTickets(){
  const res = await fetch('http://localhost:4000/tickets')

  return res.json()
}


export default function Home() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => { // Use useEffect to fetch tickets on component mount
    async function fetchTickets() {
      const fetchedTickets = await getTickets();
      setTickets(fetchedTickets); // Update the tickets state with the fetched data
  }fetchTickets();
  }, []);


  
  return (
    <main>
      <h1 className='pb-4'> Home</h1>
      <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat inventore optio facere voluptatum maxime facilis pariatur, natus minima perferendis eum aliquam excepturi molestiae in dicta, sit error nam sapiente harum!</p>
        
      <div className='flex justify-center my-8'> 
        <Link href = '/tickets'>
          <button className='text-white bg-primary text-lg items-center'>View My Ticket</button>
        </Link>
      </div>

      <div className='pb-3 mb-2'>
        <h2>Company Updates</h2>
      </div>

      <>
        {tickets.map((ticket) => (
          <div key={ticket.id}>
            <Card
              iterable={ticket.id}
              headline={ticket.title}
              body={ticket.body}
            />
          </div>
        ))}
      </> 

      



    </main>
  )
}
