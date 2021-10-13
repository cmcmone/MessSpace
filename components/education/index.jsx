import EduItem from './eduItem';

const Education = () => {
  return (
    <section className="container p-6 space-y-6">
      <h1 className="text-4xl font-bold">Education</h1>
      <hr />
      <EduItem
        schoolName={'Western Connecticut State University'}
        program={'Bachelor of Science - BS'}
        major={'Computer Science'}
        period={'Jan 2019 – May 2021'}
        GPA={3.52}
      />
      <EduItem
        schoolName={'Naugatuck Valley Community College'}
        program={'Associate degree'}
        major={'Computer Science'}
        period={'September 2017 - June 2019'}
        GPA={3.7}
      />
    </section>
  );
};

export default Education;
