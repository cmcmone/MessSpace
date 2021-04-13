import Head from 'next/head';

import About from '../components/about';
import Contact from '../components/contact';
import Education from '../components/education';
import Hero from '../components/hero';
import Navbar from '../components/navbar';
import Projects from '../components/project';
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mess Space</title>
      </Head>
      <header className="font-lato text-white bg-gray-600">
        <Navbar />
        <Hero />
      </header>
      <article className="container max-w-4xl font-lato">
        <About />
        <Projects />
        <Education />
        <Contact />
      </article>
      <footer className="bg-gray-200">
        <Footer />
      </footer>
    </>
  );
}
