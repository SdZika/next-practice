import { notDeepEqual } from "assert";
import { Anybody } from "next/font/google"
import { notFound } from "next/navigation";

export const dynamicParams = true;

export const generateStaticParams = async () => {
    const res = await fetch('http://localhost:4000/tickets/')

    const tickets = await res.json()

    return tickets.map((ticket: any) => ({
        id: ticket.id
    }))

 
}

const GetTicket = async (id: any) => {

    await new Promise(response => setTimeout(response, 3000))

    const res = await fetch('http://localhost:4000/tickets/' + id, {next: {
        revalidate: 60
    }} )
        
    if (!res.ok) {

        notFound()
    }

    return res.json()
}

const TicketDetail = async ({params}:{params: {id: string}}) => {

  const ticket = await GetTicket(params.id)
   
  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            
                <h3>{ticket.title}</h3>
                <small>Created by {ticket.user_email}</small>
                <p>{ticket.body}</p>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
          
            
        </div>
    </main>
    
  )
}

export default TicketDetail;
