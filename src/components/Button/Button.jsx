import PropTypes from "prop-types";

const Button = (props) => {
  const { className, onClick, style, color, value } = props;

  return (
    <button
      className={`${className ? className : ''} btn btn-${color}`}
      onClick={onClick}
      style={style}
    >
      {props.value}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
  color: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default Button;