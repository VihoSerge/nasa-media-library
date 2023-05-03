import SearchBar from "@/components/search-bar";
import Logo from "@/components/ui/logo";

import "react-datepicker/dist/react-datepicker.css";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen gap-8 p-8 pt-32">
      <Logo />
      <p className="text-5xl w-2/3 text-center">Welcome to NASA Media Library!</p>
      <p className="text-3xl w-2/3 text-center">
        Explore stunning photos from NASA's collection. Discover the beauty of the universe and the marvels of space
        exploration.
      </p>
      <SearchBar />
    </div>
  );
}
