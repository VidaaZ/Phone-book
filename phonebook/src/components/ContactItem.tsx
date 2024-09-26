import React, { FC } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Contact } from "../types";
const ContactItem: FC<Contact> = ({
  firstName,
  lastName,
  phoneNumber,
  address,
  email,
}) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phoneNumber}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>
        <AiFillEdit size={20} color="blue" className="icon" />
      </td>
      <td>
        <AiFillDelete size={20} color="red" className="icon" />
      </td>
    </tr>
  );
};
export default ContactItem;
