import './InputSearch.css';

export const InputSearch = ({ searchValue, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      type='search'
      value={searchValue}
      className='text-input'
      placeholder='Type Your Search'
    />
  );
};