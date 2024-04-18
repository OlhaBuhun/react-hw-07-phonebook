import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const filter = event.target.value;
    const normalizedFilter = filter.toLowerCase().trim();
    dispatch(setFilter(normalizedFilter));
  };

  return (
    <FilterLabel >
      Find contacts by name
      <FilterInput
        type="text"
        // name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={handleFilter}
      />
    </FilterLabel>
  );
};
