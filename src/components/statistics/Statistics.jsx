import PropTypes from "prop-types";

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <>
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {countTotalFeedback()}</p>
        </li>
        <li>
          <p>Positive Feedback:{countPositiveFeedbackPercentage()}%</p>
        </li>
      </ul>
    </>
  );
};

Statistics.propsTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
}.isRequired;

export default Statistics;
