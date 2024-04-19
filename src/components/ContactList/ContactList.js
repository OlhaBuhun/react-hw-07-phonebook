import { useSelector } from 'react-redux';
import { ContactListStyled } from './ContactList.styled';
import { selectVisibleContacts } from '../../redux/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
 
  const contacts = useSelector(selectVisibleContacts);
  
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
};
