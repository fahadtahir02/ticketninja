import Link from "next/link";
import Image from "next/image"
import Logo from './logoo.png'



export default function NavBar() {
  return (

    <nav>
      <Image
        src={Logo}
        alt='Dojo Helpdesk logo'
        width={70}
        placeholder='blur'
        quality={100}
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">Tickets</Link>
      {/* {user && <span>Hello, {user.email}</span>}
      <LogoutButton /> */}
    </nav>









    // <div>
    //     <div>
    //         <ol className="flex justify-start">
    //             <li className="p-2 m-2"><Link href="/tickets.tsx">Tickets</Link></li>
    //             <li className="p-2 m-2"><Link href='/'>Learn More</Link></li>
    //             <li className="p-2 m-2"><Link href='/'>About Us</Link></li>
    //         </ol>
            
    //     </div>
    // </div>
  )
}
