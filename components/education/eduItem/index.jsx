import PropTypes from 'prop-types';

const EduItem = ({ schoolName, program, major, period, GPA }) => {
  return (
    <section className="container bg-gray-200 shadow-xl rounded-md space-y-1 p-6">
      <h1 className="font-black text-xl">{schoolName}</h1>
      <h2 className="font-bold">
        {program}, {major}
      </h2>
      <p>{period} </p>
      <p>GPA: {GPA}</p>
    </section>
  );
};

EduItem.propTypes = {
  schoolName: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  major: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  GPA: PropTypes.number.isRequired,
};

export default EduItem;
