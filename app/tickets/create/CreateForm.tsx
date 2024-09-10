"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

export const CreateForm = () => {

    const router = useRouter();

const [title, setTitle] = useState("");
const [body, setBody] = useState("");
const [priority, setPriority] = useState("low");
const [isLoading, setIsLoading] = useState(false)

const handleSubmit = async (e: any) => {
 e.preventDefault()
 setIsLoading(true)

 const ticket = {title, body, priority, user_email: "markozivkovic1982@gmail.com"}

 const res = await fetch("http://localhost:4000/tickets", {
    method:"POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(ticket)
 })

 if (res.status === 201){
    router.replace(router.asPath);
    router.push("/tickets")
 }
}

  return (
  <form onSubmit={handleSubmit} className="w-1/2">
    <label>
        <span>Title:</span>
        <input
        required
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
    </label>
    <label>
        <span>Body:</span>
        <textarea
        required
        value={body}
        onChange={(e)=>setBody(e.target.value)}
        />
    </label>
    <label>
        <span>Priority:</span>
        <select
        required
        value={priority}
        onChange={(e)=>setPriority(e.target.value)}>
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
        </select>
    </label>
    <button className="btn-primary"
    disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
    </button>
  </form>
  )
};
