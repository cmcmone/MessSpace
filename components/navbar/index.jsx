import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (
    <nav className="h-16 text-5xl px-6 flex items-center justify-end">
      <a
        href="https://github.com/cmcmone"
        className="transition duration-500 ease-out transform hover:scale-110"
      >
        <FontAwesomeIcon icon={faGithub} inverse />
      </a>
    </nav>
  );
};

export default Navbar;
