import p from 'prop-types';
import './InputSearch.css';

export const InputSearch = ({ searchValue, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      type="search"
      value={searchValue}
      className="text-input"
      placeholder="Type Your Search"
    />
  );
};

InputSearch.propTypes = {
  searchValue: p.string.isRequired,
  handleChange: p.func.isRequired,
};
