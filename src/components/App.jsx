import { useState , useEffect} from 'react';
import ContactForm from "./ContactForm/ContactForm";
import initialContacts from './contacts.json'
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import  s  from "./App.module.css"



const App = () => {

  const [contacts, setContacts] =  useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem('contacts'));
    if (savedData) {
      return savedData;
    }
    return initialContacts
   });
    
   
  const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return ([...prevContacts, newContact])
    });
  };
   useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);
    

  const deleteContact = (ContactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((Contact) => Contact.id !== ContactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) 
  );

  
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox  value={filter} onFilter={setFilter}/>  
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />  
    </div>
  );
};

export default App;