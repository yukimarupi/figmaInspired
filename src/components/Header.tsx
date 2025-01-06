import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Figma Site</h1>
        <nav className="space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </nav>
        <Image src="/globe.svg" alt="Globe Icon" width={24} height={24} />
      </div>
    </header>
  );
};

export default Header;
