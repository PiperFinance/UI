import Image from 'next/image';
import Link from 'next/link';
import logo from './logo.svg';

const Logo = () => {
  return (
    <Link href="/" className="w-100 h-10 relative flex my-5">
      {/* <span
        className={`mb-5 px-3 py-1  rounded-lg inline-flex cursor-pointer font-bold items-center text-2xl font-semibold text-wheat-500 bg-primary-600`}
      >
        P
      </span> */}
      <Image fill src={logo.src} alt="" />
    </Link>
  );
};

export default Logo;
