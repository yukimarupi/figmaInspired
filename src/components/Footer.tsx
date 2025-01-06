import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-50 text-gray-600 py-10">
      <div className="container mx-auto px-6">
        {/* 上部のセクション */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-300 pb-6 mb-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} YourCompany</p>
          <h2 className="text-xl font-bold text-blue-900">Landing</h2>
          <button className="bg-blue-800 text-white px-6 py-2 rounded-full text-sm">Purchase now</button>
        </div>

        {/* 下部のリンクセクション */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm">
          {/* メニューリンク */}
          <div className="flex space-x-6">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>

          {/* ソーシャルアイコン */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <Image
                src="/images/icon/youtube.png"
                alt="YouTube"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#" aria-label="Twitter" className="hover:opacity-80">
              <Image
                src="/images/icon/Twitter.png"
                alt="Twitter"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#" aria-label="Facebook" className="hover:opacity-80">
              <Image
                src="/images/icon/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-80">
              <Image
                src="/images/icon/in.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <Image
                src="/images/icon/Instagram.png"
                alt="Instagram"
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
