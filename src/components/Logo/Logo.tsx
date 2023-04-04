import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span
        className={`mb-5 px-3 py-1  rounded-lg inline-flex cursor-pointer font-bold items-center text-2xl font-semibold text-wheat-500 bg-primary-600`}
      >
        P
      </span>
    </Link>
  );
};

export default Logo;
