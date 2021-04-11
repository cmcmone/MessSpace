import { FaBeer } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="inline-block text-center bg-red-300 text-lg text-gray-600">
        <FaBeer className="inline-block text-green-700 mb-1" />
        Hello World!
      </h1>
    </div>
  );
}
