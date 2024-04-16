import { useSelector } from 'react-redux';
import { ContactListStyled } from './ContactList.styled';
import { selectVisibleContacts } from '../../redux/selectors';
import { Contact } from 'components/Contact/Contact';
// import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  // const contactsBook = useSelector(selectContacts);
  // const filterBook = useSelector(selectFilter);

  // const normalizedFilter = filterBook.toLowerCase();

  // const visibleContacts = contactsBook.filter(contact =>
  //   contact.name.toLowerCase().includes(normalizedFilter)
  // );
  const contacts = useSelector(selectVisibleContacts)

  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
};
