import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactGmail = () => {
  return (
    <div className="inline-block w-max text-center text-green-500 space-x-6">
      <a href="mailto:cmcmone@gmail.com" className="group">
        <FontAwesomeIcon
          className="text-5xl group-hover:text-gray-800"
          icon={faEnvelope}
        />
        <h1 className="uppercase group-hover:text-gray-800 font-medium text-sm">
          cmcmone@gmail.com
        </h1>
      </a>
    </div>
  );
};

export default ContactGmail;
