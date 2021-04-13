import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="p-8 mx-auto text-center">
      <a href="https://github.com/cmcmone/MessSpace">
        <FontAwesomeIcon className="text-xl" icon={faGithub} />
        <span> MessSpace</span>
      </a>
    </div>
  );
};

export default Footer;
