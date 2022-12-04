import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <span
        className={`inline-flex text-wheat-500 items-center cursor-pointer text-2xl font-semibold my-6`}
      >
        PIPER
        <span className="text-primary-600">&nbsp;FINANCE</span>
      </span>
    </Link>
  );
};

export default Logo;
