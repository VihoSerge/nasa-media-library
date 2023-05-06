import SearchBar from "@/components/search-bar";
import Logo from "@/components/ui/logo";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 lg:pt-32">
      <Logo />
      <div className="text-center md:w-2/3 space-y-3">
        <p className="text-4xl">Welcome to NASA Media Library!</p>
        <p className="text-2xl">
          Explore stunning photos from NASA's collection. Discover the beauty of the universe and the marvels of space
          exploration.
        </p>
      </div>
      <SearchBar />
    </div>
  );
}
