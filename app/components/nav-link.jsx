import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 px-3 md:p-0 text-white bg-[#5956B8] rounded md:bg-transparent hover:md:text-[#5956B8] hover:md:dark:text-[#5956B8]"
    >
      {title}
    </Link>
  );
};

export default NavLink;