import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span
        className={`my-6 inline-flex cursor-pointer items-center text-2xl font-semibold text-wheat-500`}
      >
        PIPER
        <span className="text-primary-600">&nbsp;FINANCE</span>
      </span>
    </Link>
  );
};

export default Logo;
