import PropTypes from "prop-types";
import Button from "components/Button";

const Result = ({ query, totalElements, }) => {
  return (
    <div>
      <span>You searched: <span style={{textDecoration: 'underline'}}>{query}</span></span>
      <Button className={'totalBtn'} color={'primary'} value={totalElements} />
    </div>
  )
}

Result.propTypes = {
  query: PropTypes.string,
  totalElements: PropTypes.number,
}

export default Result;