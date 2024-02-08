import Search from 'images/search.svg';
import PropTypes from 'prop-types';

const SearchInput = (props) => {
  const { className, onChange, style, ...rest } = props;
  return (
    <div
      className={className}
      style= {style}
    >
      <input
        {...rest}
        className="search"
        onChange={onChange}
      />
      <img className="searchIcon" src={Search} alt="Search icon" />
    </div>
    )
}

SearchInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object
};

export default SearchInput;