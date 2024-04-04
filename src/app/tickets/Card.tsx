import React from 'react'


interface Card{
  ticketDescription: 'string';

} 

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets')

  return res.json()
  
}



export default async function Card() {

  const tickets = await getTickets()
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className='bg-white rounded-md p-4 my-4'>
            <p className='mb-4 '><b>{ticket.title}</b></p>
            <p className='mb-4'>{ticket.body}</p>    
      </div>
      ))}
      
    </>
  )
}
