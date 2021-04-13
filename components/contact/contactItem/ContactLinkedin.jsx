import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ContactLinkedin = () => {
  return (
    <div className="inline-block w-max text-center text-green-500 space-x-6">
      <a href="https://www.linkedin.com/in/roychen168/" className="group">
        <FontAwesomeIcon
          className="text-5xl group-hover:text-gray-800"
          icon={faLinkedin}
        />
        <h1 className="uppercase group-hover:text-gray-800 font-medium text-sm">
          linkedin
        </h1>
      </a>
    </div>
  );
};

export default ContactLinkedin;
