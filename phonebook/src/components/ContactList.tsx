import React, { FC } from "react";
import { Contact } from "../types";
import ContactItem from "./ContactItem";

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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(
              ({ firstName, lastName, phoneNumber, address, email, id }) => (
                <ContactItem
                  key={id}
                  id={id}
                  firstName={firstName}
                  lastName={lastName}
                  phoneNumber={phoneNumber}
                  email={email}
                  address={address}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ContactList;
