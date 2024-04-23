// By default all components are server components

import TicketLists from "./TicketLists";

export default function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently open tickets.</small></p>
        </div>
      </nav>
      <TicketLists/>
    </main>
  )
}
