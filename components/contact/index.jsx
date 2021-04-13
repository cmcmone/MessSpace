import ContactGithub from './contactItem/ContactGithub';
import ContactGmail from './contactItem/ContactGmail';
import ContactLinkedin from './contactItem/ContactLinkedin';

const Contact = () => {
  return (
    <section className="container p-6 space-y-6">
      <h1 className="text-4xl font-bold">Contact</h1>
      <hr />
      <nav className="flex justify-between space-x-8 px-8">
        <ContactGithub />
        <ContactLinkedin />
        <ContactGmail />
      </nav>
    </section>
  );
};

export default Contact;
