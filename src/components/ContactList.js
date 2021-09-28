import React from "react";
import { Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Contactlist(props){
    return <ul>
    {props.contacts.map(contact =>(
       <Fragment key={uuidv4()}> 
        {contact.toLowerCase().indexOf(props.filter.toLowerCase(), 0) !== -1 ?(
            <li>{contact}</li>
        ):
        console.log(typeof(contact))} 
        <button onClick = {(e) => props.onDelete(contact, e)} visibility='visible'>Delete</button>
       </Fragment> 
    ))}
  </ul>
}