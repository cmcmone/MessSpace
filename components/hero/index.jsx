import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="p-8">
      <div className="text-center">
        <figure className="mx-auto h-32 w-32 my-5 relative">
          <Image
            className="rounded-full"
            src="/images/programming.jpg"
            alt="Full Stack Developer"
            layout="fill"
          />
        </figure>
        <h1 className="text-5xl py-3">Roy Chen</h1>
        <p className="font-roboto text-xl">Full-Stack Web Developer</p>
        <p className="font-roboto text-lg pt-5">
          <a href="/docs/resume.pdf" className="group">
            <FontAwesomeIcon
              className="group-hover:animate-bounce"
              icon={faFileDownload}
            />{' '}
            <strong className="font-normal">Resume</strong>
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
