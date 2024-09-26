export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
  email: string;
}

export interface Action {
  type: string;
  payload: Contact;
}
export interface Update {
  id: number;
  updates: Contact;
}
