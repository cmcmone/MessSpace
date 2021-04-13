const About = () => {
  return (
    <section className="container p-6 space-y-6">
      <h1 className="text-4xl font-bold">About Me</h1>
      <hr />
      <section className="space-y-4 font-roboto text-base">
        <h1>Hi there, I’m Roy!👋</h1>
        <p>
          I'm a senior in computer science at Western Connecticut State
          University and will graduate in May. I'm looking for a
          part-time/full-time position in software engineering.
        </p>
        <ul className="list-disc list-inside space-y-4">
          <li>
            😄 I enjoy coding in Java, JavaScript, C++, C#, HTML/CSS, and more.
          </li>
          <li>
            🌱 I’m currently learning R Programming, ES6, Computer Networks,
            Theory of Computation.
          </li>
          <li>
            📫 How to reach me:{' '}
            <a href="https://github.com/cmcmone" className="underline">
              Github
            </a>{' '}
            <a href="mailto:cmcmone@gmail.com" className="underline">
              Gmail
            </a>{' '}
            <a
              href="https://www.linkedin.com/in/roychen168/"
              className="underline"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default About;
