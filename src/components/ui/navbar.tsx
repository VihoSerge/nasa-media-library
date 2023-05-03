import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Logo from "./logo";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between px-8 h-[64px]">
        <Logo />
        <ul>
          <li>
            <SunIcon className="hidden dark:inline w-6 h-6" />
            <MoonIcon className="inline dark:hidden w-6 h-6" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
