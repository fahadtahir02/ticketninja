'use client'
import Image from 'next/image'
import Link from 'next/link'
import Card from './tickets/TicketLists'
import data from '../../data/db.json'
import { useEffect, useState } from 'react'
import TicketLists from './tickets/TicketLists'




// async function getTickets() {
//   const res = await fetch('http://localhost:4000/tickets')

//   return res.json()
// }


// export default function Home() {
//   const [tickets, setTickets] = useState([]);

//   useEffect(() => { // Use useEffect to fetch tickets on component mount
//     async function fetchTickets() {
//       const fetchedTickets = await getTickets();
//       setTickets(fetchedTickets); // Update the tickets state with the fetched data
//     } fetchTickets();
//   }, []);



//   return (
//     <main>
//       <h1 className='pb-4'> Home</h1>
//       <p className='pb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat inventore optio facere voluptatum maxime facilis pariatur, natus minima perferendis eum aliquam excepturi molestiae in dicta, sit error nam sapiente harum!</p>

//       <div className='flex justify-center my-8'>
//         <Link href='/tickets'>
//           <button className='text-white bg-primary text-lg items-center'>View My Ticket</button>
//         </Link>
//       </div>

//       <div className='pb-3 mb-2'>
//         <h2>Company Updates</h2>
//       </div>

//       {/* <>

//         {tickets.map((ticket) => (
//           <div key={ticket.id} className='flex flex-col m-2 p-2 bg-white rounded-md'>
//             <h2 className='m-2 p-2'>{ticket.title}</h2>
//             <p className='m-2 p-2'>{ticket.body}</p>
//             <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>

//           </div>
//         ))}
//         {tickets.length === 0 && (
//           <p className='m-2 p-2 bg-white text-center'>No tickets as of right now</p>
//         )}
//       </> */}
//       <TicketLists></TicketLists>





//     </main>
//   )
// }

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero repellendus tempore, exercitationem odit, quasi doloremque possimus recusandae alias sequi totam soluta natus iure eius, obcaecati sint dolores blanditiis aspernatur quo officia iusto ut. Et, aliquid sed voluptates iste cum totam, facere explicabo, fugit suscipit ratione aspernatur consequuntur ex mollitia quaerat?</p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>

      <div className="card">
        <h3>New member of the web dev team...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti.</p>
      </div>
      <div className="card">
        <h3>New website live!</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, at quam. Dolores omnis possimus quam soluta rerum illo laborum ullam pariatur molestiae, modi beatae corrupti, assumenda distinctio adipisci, cupiditate minima eum vitae? Similique dicta est facilis debitis, autem temporibus quo repellat illum unde id iste veritatis eveniet, aspernatur enim quas.</p>
      </div>
    </main>
  )
}