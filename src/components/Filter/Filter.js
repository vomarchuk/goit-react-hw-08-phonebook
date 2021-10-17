import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import s from './Filter.module.css';

const Filter = ({ value }) => {
  const dispatch = useDispatch();
  const onChange = event => {
    dispatch(contactsOperations.filter(event.target.value));
  };
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
