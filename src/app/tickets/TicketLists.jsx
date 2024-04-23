

async function getTickets() {
  const res = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 30
    }
  })

  return res.json()
}

export default async function TicketLists() {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className='flex flex-col m-2 p-2 bg-white rounded-md'>
          <h2 className='m-2 p-2'>{ticket.title}</h2>
          <p className='m-2 p-2'>{ticket.body}</p>
          <div className={`pill ${ticket.priority} flex ml-auto`}>{ticket.priority} priority</div>

        </div>
      ))
      }
      {tickets.length === 0 && (
        <p className='m-2 p-2 bg-white text-center'>No tickets as of right now</p>
      )}
    </>
  )
}