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
    default:
      return state;
  }
};
