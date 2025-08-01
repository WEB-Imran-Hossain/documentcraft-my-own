import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="./assets/icons/logo.svg"
          alt="Protocol"
          className="h-6 w-auto"
        />
      </Link>
    </div>
  );
};

export default Logo;
