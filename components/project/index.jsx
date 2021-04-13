import ProjectItem from './projectItem';

const Projects = () => {
  return (
    <section className="container p-6 space-y-6">
      <h1 className="text-4xl font-bold">Projects</h1>
      <hr />
      <div className="flex flex-wrap justify-between">
        <ProjectItem
          title="The Movie DB"
          src="/images/project-1-cover.png"
          href="https://github.com/cmcmone/reactjs-movies-app"
        />
        <ProjectItem
          title="2048 GAME"
          src="/images/project-2-cover.png"
          href="https://github.com/cmcmone/Game2048"
        />
        <ProjectItem
          title="The Online Store"
          src="/images/project-3-cover.png"
          href="https://github.com/cmcmone/TStore"
        />
      </div>
    </section>
  );
};

export default Projects;
