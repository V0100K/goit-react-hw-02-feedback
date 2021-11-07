import PropTypes from "prop-types";

const FeedbackOptions = ({ handleInc }) => {
  return (
    <>
      <button name="good" onClick={handleInc}>
        Good
      </button>
      <button name="neutral" onClick={handleInc}>
        Neutral
      </button>
      <button name="bad" onClick={handleInc}>
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  handleInc: PropTypes.func.isRequired,
};

export default FeedbackOptions;
