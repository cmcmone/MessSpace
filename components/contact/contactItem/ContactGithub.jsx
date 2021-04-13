import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const ContactGithub= () => {
  return (
    <div className="inline-block w-max text-center text-green-500 space-x-6">
      <a
        href="https://github.com/cmcmone"
        className="group"
      >
        <FontAwesomeIcon
          className="text-5xl group-hover:text-gray-800"
          icon={faGithub}
        />
        <h1 className="uppercase group-hover:text-gray-800 font-medium text-sm">
          github.com/cmcmone
        </h1>
      </a>
    </div>
  );
};

export default ContactGithub;
