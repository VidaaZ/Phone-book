import React, { useReducer, FC } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import { contactsReducer, AppState } from "./reducers/contactsReducer";
import ContactList from "./components/ContactList";

const initialState: AppState = {
  contacts: [],
};

const App: FC = () => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  return (
    <>
      <Header />
      <ContactForm dispatch={dispatch} />
      {state.contacts.length > 0 && <ContactList contacts={state.contacts} />}
    </>
  );
};
export default App;
