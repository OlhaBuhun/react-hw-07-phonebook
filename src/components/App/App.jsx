import { ContactList } from '../ContactList/ContactList';
import { ContactForm } from '../ContactForm/ContactForm';
import { Filter } from '../Filter/Filter';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/loader';
import { PiBookOpenTextFill } from 'react-icons/pi';
import { IoIosContacts } from 'react-icons/io';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>
        Phonebook{' '}
        <span>
          <PiBookOpenTextFill size="30" />
        </span>
      </h1>
      <ContactForm />
      <h2>
        Contacts{' '}
        <span>
          <IoIosContacts size="30" />
        </span>
      </h2>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </Container>
  );
};
