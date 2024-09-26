import React, { useReducer, FC } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import { contactsReducer, AppState } from "./reducers/contactsReducer";

const initialState: AppState = {
  contacts: [],
};

const App: FC = () => {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  return (
    <>
      <Header />
      <ContactForm dispatch={dispatch} />
    </>
  );
};
export default App;
