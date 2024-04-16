import { useDispatch } from 'react-redux';
import { ContactDelitButton, ContactItem } from './Contact.styled';
import { deleteContact } from '../../redux/operations';

export const Contact = ({contact}) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ContactItem>
      <p>
        {contact.name}: {contact.phone}
      </p>
      <ContactDelitButton type="button" onClick={onDeleteContact}>
        Delete
      </ContactDelitButton>
    </ContactItem>
  );
};
