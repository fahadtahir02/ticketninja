import Link from "next/link";



export default function NavBar() {
  return (
    <div>
        <div className="p-2 mr-4">
            <ol className="flex justify-start">
                <li className="p-2 m-2"><Link href="/tickets.tsx">Tickets</Link></li>
                <li className="p-2 m-2"><Link href='/'>Learn More</Link></li>
                <li className="p-2 m-2"><Link href='/'>About Us</Link></li>
            </ol>
            
        </div>
    </div>
  )
}
