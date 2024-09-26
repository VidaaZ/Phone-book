import React, { FC } from "react";
import { Contact } from "../types";

interface ContactListProps {
  contacts: Contact[];
}
const ContactList: FC<ContactListProps> = ({ contacts }) => {
  return (
    <div className="contacts-list">
      <h3 className="contacts-list-title">List of Contacts</h3>
      <div className="contacts-list-table-container">
        <table className="contacts-list-table">
          <thead className="contacts-list-header">
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Email Address</th>
              <th>Adress</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(
              ({ firstName, lastName, phoneNumber, address, email }) => (
                // eslint-disable-next-line react/jsx-key
                <tr>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td>{address}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ContactList;
