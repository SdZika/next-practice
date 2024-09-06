import { get } from 'http'
import next from 'next'
import React from 'react'
import Link from 'next/link'


const GetTickets = async () => {
    const res = await fetch('http://localhost:4000/tickets', {next: {
        revalidate: 60
    }} )
        
    return res.json()
}

const TicketList = async () => {

    const tickets = await GetTickets()

 return (
    <>
    {tickets.map((ticket: any) => (
        <div key={ticket.id} className='card my-5'>
            <Link href={`/tickets/${ticket.id}`}>
                <h3>{ticket.title}</h3>
                <p>{ticket.body.slice(0, 200)}...</p>
                <div className={`pill ${ticket.priority}`}>
                {   ticket.priority} priority
                </div>
            </Link>
           
            

        </div>
    ))}
    {tickets.length === 0 && (
        <p className='text-center'>There is no open pictures</p>
    )}
    </>
 )
}

export default TicketList;
