import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 ">
      <div className="flex flex-wrap items-center justify-between px-8 h-[64px]">
        <Logo />
      </div>
    </nav>
  );
}
