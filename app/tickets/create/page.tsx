import React from "react";
import { CreateForm } from "./CreateForm";

const CreateTicket = () => {
  return (
    <main>
      <h2 className="text-center text-primary">Add a new ticket</h2>
      <CreateForm />
    </main>
  );
};

export default CreateTicket;
