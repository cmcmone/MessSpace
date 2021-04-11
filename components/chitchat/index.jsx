import Image from 'next/image';

export default function index() {
  return (
    <>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12"
            src="/images/chat.svg"
            alt="ChitChat Logo"
          />
        </div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>

      <div className="flex items-center space-x-4 mt-10 p-6 bg-yellow-50 max-w-sm mx-auto rounded-xl shadow-md">
        <div className="h-12 w-12 relative">
          <Image src="/images/chat.svg" alt="ChitChat Logo" layout="fill" />
        </div>
        <div>
          <h1 className="text-xl font-medium text-black">ChitChat</h1>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </>
  );
}
