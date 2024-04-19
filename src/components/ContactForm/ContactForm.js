import { useDispatch, useSelector } from 'react-redux';
import { Form, FormButton, FormInput, FormLabel } from './ContactForm.styled';
import { addContact } from '../../redux/operations';
import { selectContacts } from '../../redux/selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const formName = form.elements.name.value;
    const formPhone = form.elements.phone.value;
   
    if (contacts.some(({ name }) => name === formName)) {
      toast.error(
        `${formName} is already in contacts`
      );
      return form.reset();
    }

    if (contacts.some(({ phone }) => phone === formPhone)) {
      toast.error(
        `${formPhone} is already in contacts`
      );
      return form.reset();
    }
    dispatch(addContact({name: formName, phone: formPhone}));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Name
        <FormInput type="text" name="name" value={contacts.name} required />
      </FormLabel>
      <FormLabel htmlFor="name">
        Number
        <FormInput type="tel" name="phone" value={contacts.phone} required />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};
