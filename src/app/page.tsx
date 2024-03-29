import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
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

      <div className='bg-white rounded-md p-4'>
        <div className=''>
          <p className='mb-4 '><b>New Member added</b></p>
          <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam cumque optio facere deleniti quam iusto iure, odit quod esse eius quae magnam ratione qui nam voluptatem architecto ducimus cupiditate inventore!</p>
        </div>
      </div>



    </main>
  )
}
