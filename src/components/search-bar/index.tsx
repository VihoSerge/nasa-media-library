import { buildParams, getParams } from "@/utils/url";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../ui/button/button";
import Input from "../ui/input/input";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    if (urlParams.get("q")) {
      setSearchText(urlParams.get("q"));
    }
  }, [location]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearch = () => {
    if (!searchText.length) {
      return;
    }

    const params = getParams(location.search);

    const urlParams = buildParams({ ...params, q: searchText });

    navigate(`/search/${urlParams}`);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 dark:bg-[#23232c] w-full md:w-1/3 rounded-md  ">
      <Input
        className="flex-1"
        inputClassName="!dark:bg-[#17181c] dark:border-0"
        name="search"
        placeholder="Enter your search"
        onChange={handleChange}
        value={searchText}
      />

      <Button className="bg-black text-white" onClick={handleSearch}>
        Search
      </Button>
    </div>
  );
}
