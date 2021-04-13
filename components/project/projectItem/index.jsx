import PropTypes from 'prop-types';
import Image from 'next/image';

const ProjectItem = ({ title, src, href }) => {
  return (
    <section className="shadow-xl rounded-md mb-8 bg-gray-200 w-102 h-80 p-4">
      <h1 className="font-bold text-2xl pb-2">{title}</h1>
      <a
        href={href}
        className="w-full h-11/12 flex flex-col justify-center items-center pb-4 transition duration-300 ease-out transform hover:scale-102"
      >
        <figure className="w-full h-full relative">
          <Image className="rounded-md" src={src} alt={title} layout="fill" />
        </figure>
      </a>
    </section>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ProjectItem;
