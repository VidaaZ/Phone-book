import { Contact, Action } from "../types";

export interface AppState {
  contacts: Contact[];
}

export const contactsReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case "UPDATE_CONTACT":
      const { id, updates } = action.payload;
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === id) {
            return {
              ...contact,
              ...updates,
            };
          }
          return contact;
        }),
      };
    default:
      return state;
  }
};
