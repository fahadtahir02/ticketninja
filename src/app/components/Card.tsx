import React from 'react'


interface Card{
   ticketTitle: 'string';
   ticketDescription: 'string';

} 

export default function Card({ticketTitle, ticketDescription}) {
  return (
    <div className='bg-white rounded-md p-4'>
        <div className=''>
          <p className='mb-4 '><b>{ticketTitle}</b></p>
          <p className='mb-4'>{ticketDescription}</p>
        </div>
    </div>
  )
}
